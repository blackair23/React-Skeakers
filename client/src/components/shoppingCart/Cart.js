export const Cart = ({carts, func}) => {
    const onClick = (carts) => {
        console.log(carts);
        func(carts);
    }

    return (
        <article className="cart">
            <img  src={carts.img[0]} alt="prod img"/>
            <div className="cart-inf">
                <div>
                    <p><strong>{carts.name}</strong></p>
                    <p><strong>BGN {carts.price}</strong></p>
                </div>
                {/* <div>
                    <button className="cart-btn">-</button>
                    <input className="input" type="number" value="1"/>
                    <button className="cart-btn">+</button>
                </div> */}
                <button onClick={onClick} className="cart-btn">Delete</button>
            </div>
        </article>
    )
}