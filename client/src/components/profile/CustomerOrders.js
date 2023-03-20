import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { getCustomerOrders } from "../../services/orderService";
import './customer.css'

export const CustomerOrders = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if( user._id === id) {
        getCustomerOrders(id)
            .then((ord) => {
                console.log('Customer >>>',ord);
                setOrders(ord);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }else {
        setLoading(false);
    } 
    }, [id, user]);

    return (
        <>
        {loading && <div>Loading...</div>}
        {!loading && orders.length > 0 && user._id === id
            ?
        <section id="recived-orders">
            <h2>Delivers:</h2>
            {orders.map(o => {
                let items = 0;
                let price = 0;
                for (const i of o.orderdProducts) {
                    if(i._ownerId === user._id){
                        items += 1;
                        price += Number(i.price)
                    }
                }
                return (
                <div key={o._id} className="order-cart">
                    <img src={o.customerId.profileImg} alt=""/>
                    <p>Address: {o.address}</p>
                    <p>Items: {items}</p>
                    <h3>Order sum: ${price}</h3>
                </div>)
            })}
        </section>
        :
        <></>
        }
        </>
     )
}