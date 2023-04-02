import { useEffect, useState } from "react";
import { getHomeProducts } from "../../services/productService";
import { Pagination } from "../pagination/Pagination";
import { Product } from "../Product";
import { Search } from "../search/Search";
import { Sort } from "../search/Sort";
import './catalog.css';

export const Catalog = () => {

    const [products, setProducts] = useState([]);
    const [filterProd, setFilterProd] = useState([]);

    const [sortValue, setSortValue] = useState('');

    const [currentPage, setCurrentPage] = useState('');
    const recordsPerPage = 2; 
    const lastIndex = currentPage * recordsPerPage;
    const firstindex = lastIndex - recordsPerPage;
    const records = filterProd.slice(firstindex, lastIndex);


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


    // console.log('filter ->>>', filterProd)

    return (
        <>
        <Sort setSortValue={setSortValue}></Sort>
        <section id="catalog">
            <Search sortValue={sortValue} filtered={filtered} products={products}></Search>
            <section id="product-section">
                    {records.length > 0
                    ?
                    records.map(p => <Product key={p._id} products={p}></Product>)
                    :
                    <>
                    <div></div>
                    <h2>No available product!</h2>
                    <div></div>
                    </>
                }
            </section>
        </section>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} products={filterProd}  ></Pagination>
        </>
    )

}