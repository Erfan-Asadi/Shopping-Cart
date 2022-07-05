import axios from 'axios';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ProductDetail.css';


const ProductDetail = ({products}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const this_product = products.find(product => product.id == id);
    const {title, image,description, category, price} = this_product || axios.get(`/products/${id}`).then(res => res.data);


    return (
        <section className='productItem-detail'>
            <div className='cover'>
                <img src={image} />
            </div>
            <div className='info'>
                <h2 className='title'>{title}</h2>
                <p className='description'>{description}</p>
                <h4 className='category'>category: {category}</h4>
                <strong className='price'>Price: $ {price}</strong>
                <button className='go-back' onClick={()=> navigate(-1)}>Back</button>
            </div>
        </section>
  )
}

export default ProductDetail