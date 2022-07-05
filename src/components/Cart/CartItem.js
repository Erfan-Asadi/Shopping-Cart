import React, { useContext } from "react";
import { cartItemsContext } from "../contexts/cartItemsContext";

const CartItem = ({product}) => {
    const {dispatch} = useContext(cartItemsContext);
    const {title, category,id, selectedCount, totalPrice, src} = product
    
    const deleteHandler = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {id: id}
        })
    }
  
  
    return (
    <div className="cart-item">
      <img
        src={src}
        className="product-image"
        alt="product one"
      />
      <div className="name-detail">
        <h5>{category}</h5>
        <small>
          <span>
            count: <span className="product-count">{selectedCount}</span>
          </span>
        </small>
      </div>
      <p className="main-title">{title}</p>
      <span className="price">{totalPrice}$</span>
      <button className="close-btn" onClick={deleteHandler}>delete</button>
    </div>
  );
};

export default CartItem;
