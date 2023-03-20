import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { getOrders } from "../../services/orderService";
import './myOrders.css'

export const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
            if( user._id === id) {
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
        }else {
            setLoading(false);
        }}, [id, user]);

    return (
        <>
        {loading && <div>Loading...</div>}
        {!loading && orders.length > 0 && user._id === id  
            ?
            <section id="orders-history">
            <h2>Order history:</h2>
            {orders.map((o, index) => (
                <div key={index} className="order-items">
                    <div>
                    {o.orderdProducts.map((c) => (
                        <div key={c._id} className="cart-history">
                            <img src={c.img[0]} alt={c.title} />
                            <p>{c.name}</p>
                            <p>Price: ${c.price}</p>
                        </div>
                    ))}
                    </div>
                <h3 className="total-sum">Total: ${o.totalPrice}</h3>
                </div>
            ))}
            </section>
            :
            <></>
        }
        </>
      );
    };
