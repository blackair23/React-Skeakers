import { useEffect, useState } from "react";
import { getHomeProducts } from "../../services/productService";
import { Product } from "../Product";
import { Search } from "../search/Search";
import './catalog.css';

export const Catalog = () => {

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
        <section id="catalog">
            <Search></Search>
            <section id="product-section">
                    {products.length > 0
                    ?
                    products.map(p => <Product key={p._id} products={p}></Product>)
                    :
                    <>
                    <div></div>
                    <h2>No available product!</h2>
                    <div></div>
                    </>
                }
            </section>
        </section>
    )

}