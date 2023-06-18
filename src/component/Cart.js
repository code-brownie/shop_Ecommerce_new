import React from 'react'
import '../style/cart.css'
import { useDispatchCart, useCart } from './ContexReducer';
const Cart = () => {
    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>The cart is Empty!</div>
        )
    }
    let totalPrice = data.reduce((total, item) => total + item.price * item.Qty, 0)
    console.log(totalPrice)
    return (
        <>
            <div className="small-containers cart">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    {data.map((item) => {
                        return (
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img src={item.img} alt="cart" />
                                        <div>
                                            <p>{item.name}</p>
                                            <h4>Price: ₹{item.price}</h4>
                                            <a href="/">Remove</a>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.Qty}</td>
                                <td>₹{item.price * parseInt(item.Qty)}</td>
                            </tr>
                        )
                    })}

                </table>

                <div className="total-price">
                    <table>
                        <tr>
                            <td>Total</td>
                            <td>₹{totalPrice}</td>
                        </tr>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Cart
