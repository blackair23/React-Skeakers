import { useEffect, useState } from "react";
import { getHomeProducts } from "../../services/productService";
import { Product } from "../Product";
import { Search } from "../search/Search";
import './catalog.css';

export const Catalog = () => {

    const [products, setProducts] = useState([]);
    const [filterProd, setFilterProd] = useState(products);
    useEffect(() => {
        getHomeProducts()
            .then(prod => {
                setProducts(prod);
                setFilterProd(prod)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const filtered = (prod) => {
        setFilterProd(prod);
    }

    return (
        <section id="catalog">
            <Search filtered={filtered} products={products}></Search>
            <section id="product-section">
                    {filterProd.length > 0
                    ?
                    filterProd.map(p => <Product key={p._id} products={p}></Product>)
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