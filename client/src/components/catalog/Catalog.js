import { useEffect, useState } from "react";
import { getHomeProducts } from "../../services/productService";
import { Product } from "../Product";
import { Search } from "../search/Search";
import { Sort } from "../search/Sort";
import './catalog.css';

export const Catalog = () => {

    const [products, setProducts] = useState([]);
    const [sorted, setSortedProd] =useState(products)
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
    
    useEffect(() => {
        console.log('----------------Izpratena Kym Katalotg---------------')
        // setFilterProd(filterProd)
    }, [sorted])
    const filtered = (prod) => {
        console.log('shoud fire filtered')
        // return prod;
        setFilterProd(prod);
    }

    useEffect(() => {
        filtered(sorted)
    }, [sorted])

    const sortProd = (sort) => {
        console.log('shoud fire sortProd')
        setSortedProd(sort);
        // filtered(sort)
        console.log('product se obnovi Sort')
        // setFilterProd(sort)
    } 

    console.log('filter ->>>', filterProd)
        // console.log('product se obnovi Sort')

    return (
        <>
        <Sort products={products} setProducts={sortProd} filtered={filtered} ></Sort>
        <section id="catalog">
            <Search filtered={filtered} products={sorted}></Search>
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
        </>
    )

}