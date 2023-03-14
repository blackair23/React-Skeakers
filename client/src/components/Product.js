import { Link } from "react-router-dom"

export const Product = ({products}) => {
    return (
        <Link to={`/catalog/${products._id}`}>
        <article className="product-card">
            <img src={products.img[0]} alt="product img"/>
            <p>{products.name}</p>
            <p>{products.category}</p>
            <p>BGN {products.price}</p>
        </article>
        </Link>
    )
};