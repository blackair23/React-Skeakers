import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProdById } from "../../services/productService";

import './editProduct.css';

export const EditProduct = ({product, onClose}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log('--------------------->', id);
    // const [product, setProduct] = useState({});
    // useEffect(() => {
    //     getProdById(id)
    //         .then(prod => {
    //             setProduct(prod);
    //             console.log(prod);
    //         })
    //         .catch(err => console.log(err));
    // }, [id]);
    
    const [values, setValues] = useState({
        name: product.name,
        price: product.price,
        stock: product.stock,
        image1: product.img[0],
        image2: product.img[1],
        image3: product.img[2],
        image4: product.img[3],
        description: product.description,
        category: product.category,
        size: product.size,
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            name: values.name,
            price: Number(values.price),
            stock: Number(values.stock),
            img: [
                values.image1,
                values.image2,
                values.image3,
                values.image4,
            ],
            description: values.description,
            category: values.category,
            size: values.size,
        }
        console.log(productData);

    }
    return(
        
        <section id="create-section">
            <div id="overlay">
        <div className="backdrop" onClick={onClose}></div>
        <div className="form-popup edit-product">
            <form onSubmit={onSubmit} >
                <h2>Edit listing</h2>
                <div className="form-element">
                    <label  htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter name"  value={values.name} onChange={onChangeHandler}/>
                </div>
                <div className="form-element">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" value={values.price} onChange={onChangeHandler}/>
                </div>
                <div className="form-element">
                    <label htmlFor="stock">Stock:</label>
                    <input type="number" id="stock" name="stock" value={values.stock} onChange={onChangeHandler}/>
                </div>
          
                {/* <div className="form-element">
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image"/>
                </div> */}
                {/* TODO temporary img */}
                <div className="form-element">
                    <label  htmlFor="image1">Image:</label>
                    <input type="text" id="image1" name="image1" placeholder="Img URL" value={values.image1} onChange={onChangeHandler}/>
                </div>
                <div className="form-element">
                    <label  htmlFor="image2">Image:</label>
                    <input type="text" id="image2" name="image2" placeholder="Img URL" value={values.image2} onChange={onChangeHandler}/>
                </div>
                <div className="form-element">
                    <label  htmlFor="image3">Image:</label>
                    <input type="text" id="image3" name="image3" placeholder="Img URL" value={values.image3} onChange={onChangeHandler}/>
                </div>
                <div className="form-element">
                    <label  htmlFor="image4">Image:</label>
                    <input type="text" id="image4" name="image4" placeholder="Img URL" value={values.image4} onChange={onChangeHandler}/>
                </div>
                {/* End img */}
          
                <div className="form-element">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="5" rows="5" value={values.description} onChange={onChangeHandler}></textarea>
                </div>

                <div className="form-element">
                    <label htmlFor="category">Choose a category:</label>

                    <select name="category" id="category" value={values.category} onChange={onChangeHandler}>
                      <option value="Men's Shoes">Men's Shoes</option>
                      <option value="Womans's Shoes">Womans's Shoes</option>
                      <option value="Kids's Shoes">Kids's Shoes</option>
                    </select> 
                </div>

                <div className="form-element">
                    <label htmlFor="size">Choose a size:</label>

                    <select name="size" id="size" value={values.size} onChange={onChangeHandler}>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                    </select> 
                </div>
                <input className="btn primary-btn" type="submit" value="Create"/>
            </form>
        <div className="preview in-edit">
            <h2>Preview</h2>
            <article className="product-card">
                <img src={values.image1 ? values.image1 : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1edb606b-0474-4096-959d-817fc0f399d4/air-force-1-low-retro-shoes-dGZSL6.png"} alt=""/>
                <p>{values.name ? values.name : "Air Force 1 Low Retro"}</p>
                <p>{values.category ? values.category : "Men's Shoes"}</p>
                <p>BGN {values.price ? values.price : "249"}</p>
            <button className="btn primary-btn" onClick={onClose}>Close</button>
            </article>
        </div>
        </div>

        </div>
    </section>
    )
}