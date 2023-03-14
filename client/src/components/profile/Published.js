import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getListedItems } from "../../services/profileService";
import { Product } from "../Product";

export const Published = () => {
    const { id } = useParams();
    const [listings, setListings] = useState([]);
    console.log('id >>>',id);

    useEffect(() => {
        getListedItems(id)
            .then((items) => {
                console.log('items >>>',items);
                setListings(items);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id]);
    console.log('listings >->->',listings);
    return (
        <>
        <h2>Published Component</h2>
        <section id="product-section">
        {listings.length > 0
            ?
            listings.map(l => <Product key={l._id} products={l}></Product>)
            :
            <>
            <h2></h2>
            <h2>No available product!</h2>
            <h2></h2>
            </>
        }
        </section>
        </>
    )
}