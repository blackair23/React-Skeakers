import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { CartConstext } from "../../context/cartContext";
import { getProdById } from "../../services/productService";
import { Comments } from "../comment/Comment";
import { DeleteProduct } from "./DeleteProduct";
import { EditProduct } from "./EditProduct";
export const Detail = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const { addToCartHandler} = useContext(CartConstext);

    //TODO Improve
    const [openModal, setModal] = useState({modal: null, state: false});
    const onDetailClick = (modal) => {
        setModal({modal, state: true});
    }
    const onClose = () => {
        setModal({modal: null, state: false});
    }

    const [product, setProduct] = useState({});
    const onClick = () => {
        addToCartHandler(product)
        // addToCartHandler(product);
    }

    useEffect(() => {
        getProdById(id)
            .then(prod=>{
                setProduct(prod);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id]);
    
    const [main, setMainImg] = useState([]);
    const imgHandler = (e) => {
        console.log(e.target.src);
        setMainImg(e.target.src)
    }

    return (
        <>
        {product && product.img ? (
                <>
                <section id="details">
                    {openModal.modal === 'edit' && <EditProduct product={product} setProduct={setProduct} onClose={onClose}></EditProduct>}
                    {openModal.modal === 'delete' && <DeleteProduct onClose={onClose}></DeleteProduct>}
                    <div className="detail-images">
                    <div className="main-img" onClick={imgHandler}>
                            <img  src={main.length > 0? main : product.img[0]} alt="product img"/>
                        </div>
                        <div className="carusel">
                        <div className="small" onClick={imgHandler}><img  width="150"  src={product.img[0]} alt="product img"/></div>
                        <div className="small" onClick={imgHandler}><img  src={product.img[1]} alt="product img"/></div>
                        <div className="small" onClick={imgHandler}><img src={product.img[2]} alt="product img"/></div>
                        <div className="small" onClick={imgHandler}><img  src={product.img[3]} alt="product img"/></div>
                        </div>
                    </div>
            
                    <div className="description">
                        <h2 className="title">{product.name}</h2>
                        <p>{product.category}</p>
                        <h2>BGN {product.price}</h2>
                        <p>{product.description}</p>
                        {user._id === product._ownerId._id ? 
                        <>
                        <button onClick={() => onDetailClick('edit')} className="btn primary-btn">Edit</button>
                        {/* <Link to={`/catalog/edit/${product._id}`}><button className="btn primary-btn">Edit</button></Link> */}
                        <button onClick={() => onDetailClick('delete')} className="btn primary-btn">Delete</button>
                        </>
                        : 
                        // {cart.includes(product) ? 
                            // <h3>Product added to cart</h3>
                            // :
                            <button onClick={onClick} className="btn primary-btn">Add to Cart</button>
                        // }
                        } 
                    <div className="saller">
                        <p>Seller info</p>
                        <div className="second-nest">
                            <img src={product._ownerId.profileImg} alt="seller"/>
                            <div className="saller-info">
                                <Link to={`/profile/${product._ownerId._id}`}><h3>{product._ownerId.username}</h3></Link>
                                <span> <i className="fa-solid fa-star"></i> <strong>4.9</strong></span>
                                <p>Active offers: <strong>20</strong></p> 
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <Comments></Comments>
                </>
                ) 
                :
                (<p>Loading...</p>)
            }
            </>

    );
};