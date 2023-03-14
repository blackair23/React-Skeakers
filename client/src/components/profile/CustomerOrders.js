import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { getCustomerOrders } from "../../services/orderService";

export const CustomerOrders = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log('-------order-------->',orders);
    // console.log('------id--------->',id);
    
    useEffect(() => {
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
    }, [id]);

    return (
        <div>
            <h2>Customer Orders</h2>
        </div>
    )
}