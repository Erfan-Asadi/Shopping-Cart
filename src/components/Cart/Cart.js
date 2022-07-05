import React, { useContext } from 'react'
import { cartItemsContext } from '../contexts/cartItemsContext';
import './Cart.css';
import CartItem from './CartItem';

const Cart = () => {
    let {cartItems} = useContext(cartItemsContext)
    const totalPrice = cartItems.reduce((acc, current) => +current.totalPrice + acc, 0).toFixed(3);
    


  return (
    <div className="cart-box">
        <div className="cart-items-container">
           { cartItems.length === 0 ? <p className='empty-message'>Cart is Empty...</p> : 
            cartItems.map(cartItem => <CartItem key={cartItem.id} product={cartItem}/>)}
        </div>
        <div className="factor-container">
            <div className="factor">
                <ul className="list">
                    <li>
                        <span>total items:</span>
                        <span>
                            <span className="factor-products-count">{cartItems.length}</span>
                        </span>

                    </li>
                    <li>
                        <span>total payment:</span>
                        <span>
                            <span className="factor-total-price">{totalPrice} $</span>
                        </span>

                    </li>
                </ul>
                <footer>
                    <button  className="pay">checkout</button>
                </footer>
            </div>
        </div>
    </div>
  )
}

export default Cart