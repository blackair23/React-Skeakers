import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { getOrders } from "../../services/orderService";
import { Product } from "../Product";

export const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log('-------order-------->',orders);
    // console.log('------id--------->',id);
    
    useEffect(() => {
        getOrders(id)
            .then((ord) => {
                console.log('Orders >>>',ord);
                setOrders(ord);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }, [id]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const ord = await getOrders(id);
    //         console.log('Orders >>>',ord);
    //         setOrders(ord);
    //         setLoading(false);
    //       } catch (err) {
    //         console.log(err);
    //         setLoading(false);
    //       }
    //     };
    //     fetchData();
    //   }, [id]);
    // console.log('--------------->');
    // orders.map(o => o.orderdProducts.map(c=> console.log(c)));

    return (
        <>
        {loading && <div>Loading...</div>}
        {!loading && orders.length > 0 && user._id === id  
            ?
            <>
            <h2>My Orders</h2>
            <section id="product-section">
                {orders.map(o => o.orderdProducts.map(c=><Product key={c._id} products={c}></Product>))}
            </section>
            </>
            :
            <></>
        }
        </>
      );
    };