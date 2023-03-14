import { useContext } from "react";
import { CartConstext } from "../../context/cartContext";
import { createOrder } from "../../services/orderService";

export const Checkout = ({onClose}) => {
    const { cart, setCart } = useContext(CartConstext);
    
    const onSubmit = async (e) => {
        e.preventDefault();
        let price = 0;
        let products = [];
        let ownerId = [];

        const data = {};
        // data.address = Object.fromEntries(new FormData(e.target));
        const formData = new FormData(e.target);
        let address = formData.get('address');
        data.address =  address;
        data.orderdProducts = cart;
        cart.map(c => price += Number(c.price));
        cart.map(c => products.push(c));
        cart.map(c => ownerId.push(c._ownerId._id));
        data.totalPrice= price;
        data.ownerProdId = ownerId;
        console.log(data);

        try {
            const res = await createOrder(data);
            console.log('the product data >>>', res);
            onClose();
            setCart([]); 
        } catch (error) {
            console.log(error);  
        }

    }

    return(
    <>
    <div id="overlay">
    <div className="backdrop" onClick={onClose}></div>
        <div className="form-popup profile-edit">
            <div className="form-part">
                <button onClick={onClose} className="close-btn"><i className="fa-solid fa-xmark"></i></button>
                <form onSubmit={onSubmit}>
                    <h2>CheckOut</h2>
                    <div className="form-element">
                        <label htmlFor="address">address</label>
                        <input type="text" id="address" name="address" placeholder="Enter address"/>
                    </div>
                    <input className="btn primary-btn" type="submit" value="Order"/>
                </form>
            </div>
        </div>
    </div>
    </>
    )
};