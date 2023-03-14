import { useEffect, useState } from "react"
import { getHomeProducts } from "../services/productService";
import { Product } from "./Product";

export const HomeProductSection = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        getHomeProducts()
            .then(prod => {
                setProducts(prod);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section id="product-section">
            {products.length > 0
            ?
            products.map(p => <Product key={p._id} products={p}></Product>)
            :
            <>
            <h2></h2>
            <h2>No available product!</h2>
            <h2></h2>
            </>
        }
    </section>
    )
}