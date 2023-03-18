import { useContext, useState } from 'react'
import { CartConstext } from '../../context/cartContext'
import { Cart } from './Cart';
import { Checkout } from './Checkout';
import './shoppingCart.css'

export const ShoppingCart = () => {
    const { cart } = useContext(CartConstext);
    let price = 0;
    let voucher = 0;
    cart.map(c => price += c.price * c.quantity);

    const [openModal, setModal] = useState({modal: null, state: false});

    const modalHandler = (modal) => {
        setModal({modal, state: true});
    }
    const closeModal = () => {
        setModal({modal: null, state: false});
    }
    

    return (
        <>
        {openModal.modal === 'checkOut' && <Checkout onClose={closeModal} ></Checkout>}
            <h2 className='section-title'>Shopping Cart</h2>
        <section id="shopping-card">
        <div className="cart-shop">
            {cart.length > 0 ?   cart.map(c => <Cart key={c._id} carts={c}></Cart>) : <h2>Card is empty!</h2>}
        </div>
        <div className="checkout">
            <div className="for-brake">
                <p>Subtotal</p> <p>${price}</p>
                <p>Voucher</p> <p>${voucher}</p>
            </div>
            <div className="total">
                <h3>Total</h3> <h3>${price-voucher}</h3>
            </div>
            <button onClick={() => modalHandler('checkOut')} className="checkout-btn">Checkout</button>
        </div>
    </section>
    </>
    )
}