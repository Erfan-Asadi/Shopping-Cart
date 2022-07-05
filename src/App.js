import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import './app.css'
import ProductsList from "./components/ProductsList/ProductsList";
import CartItemsContextProvider from "./components/contexts/cartItemsContext";
import Cart from './components/Cart/Cart';
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
      axios.get('/products?limit=6')
      .then(res => setProducts(res.data))
  }, [])
  return (
    <>
    <CartItemsContextProvider>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/products/:id" element={<ProductDetail products={products} />} />
          <Route path="/products" element={<ProductsList products={products} />} />
          <Route path="/" element={<Navigate to='/products' />} />
        </Routes>
    </CartItemsContextProvider>
    </>
  )
}

export default App