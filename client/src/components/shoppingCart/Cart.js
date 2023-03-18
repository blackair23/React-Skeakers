import { useContext } from "react";
import { CartConstext } from "../../context/cartContext";

export const Cart = ({carts}) => {
    const { cart, setCart } = useContext(CartConstext);

    const updateCartHandler = (carts, message) => {
        let item = cart.find((x) => x._id === carts._id);

        if(message === "decrease"){
            item.quantity -= 1;
        } else if(message === "increase") {
            item.quantity += 1;
        }

        let cartData = cart.map((i) => i._id === item._id ? item : i);

        if(message === "delete") {
            cartData = cart.filter(i => i._id !== item._id);
        }
        setCart(cartData);
    }

    return (
        <article className="cart">
            <img  src={carts.img[0]} alt="prod img"/>
            <div className="cart-inf">
                <div>
                    <p><strong>{carts.name}</strong></p>
                    <p><strong>BGN {carts.price * carts.quantity}</strong></p>
                </div>
                <div>
                    <button 
                    onClick={() => updateCartHandler(carts, "decrease")} 
                    className="cart-btn" 
                    disabled={carts.quantity === 1}
                    >
                        -
                    </button>

                    <input className="input" type="number" value={carts.quantity}/>

                    <button 
                    onClick={() => updateCartHandler(carts, "increase")} 
                    className="cart-btn" 
                    disabled={carts.quantity === carts.stock}
                    >
                        +
                    </button>
                </div>
                <button onClick={() => updateCartHandler(carts, "delete")} className="cart-btn">Delete</button>
            </div>
        </article>
    )
}