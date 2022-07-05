import React from 'react'
import ProductItem from '../ProductItem/ProductItem';
import './ProductsList.css';
import Loader from '../Loader';
const ProductsList = ({products}) => {

  return (
    <div className='products-main-container'>
        {
          products.length === 0 ? <Loader /> :
        
          products.map(product => <ProductItem key={product.id} product={product} />)
      }
    </div>
  )
}

export default ProductsList