import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { cartItemsContext } from '../contexts/cartItemsContext';
import './ProductItem.css';

const ProductItem = ({product}) => {
  const [selectedCount, setSelectedCount] = useState(0);
  const initialProductCount = product.rating.count;
  const currentAvailableCount = initialProductCount - selectedCount;
  const {dispatch} = useContext(cartItemsContext);

  const handleProductCount = (type) => {
      if (type === 'increase') {
          setSelectedCount(prev => {
              return prev === initialProductCount ? prev : prev + 1;
          })
      } else {
          setSelectedCount(prev => {
              return prev === 0 ? prev : prev - 1;
          })

      }
  }

  const addProductToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                title: product.title,
                selectedCount,
                totalPrice: (product.price * selectedCount).toFixed(2),
                category: product.category,
                src: product.image,
                id: (Math.random() * 1000).toString(16).slice(4)
            }
        })
  }

  return (
    <section className="product">
        <Link to={`/products/${product.id}`} className="image-container">
            <img src={product.image} alt="alternate text for product" />
            <span className="category">{product.category}</span>
        </Link>
        <Link to={`/products/${product.id}`} className="product-name">{product.title.split(' ', 2).join(' ')}</Link>
        <p className="product-detail">
           {product.description}
        </p>
        <span className="product-option">
            price:
            <span className="price">{product.price}</span>
        </span>
        <span className="product-option">
            count:
            <span className="availability">{currentAvailableCount}</span>

        </span>
        <footer className="controls">
            <div  className="change-count">
                <button type="button" onClick={() =>handleProductCount('decrease')} className="decrease control-btn">-</button>
                <span className='selected-count'>{selectedCount}</span>
                <button type="button" onClick={() =>handleProductCount('increase')} className="increase control-btn">+</button>
            </div>
            <button className="add-to-cart" onClick={addProductToCart}>add to cart</button>
        </footer>
    </section>
  )
}

export default ProductItem