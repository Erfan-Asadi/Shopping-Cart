import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartItemsContext } from '../contexts/cartItemsContext';
import './Header.css';


const Header = () => {
  const {cartItems} = useContext(cartItemsContext);

  return (
    <header className='header'>
            <Link to='/products'>products</Link>
            <button className='cart-toggler'>
              <Link to='/cart'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.21" height="24" viewBox="0 0 19.21 24">
                    <path data-name="Path 88159"
                        d="M68,20.746,66.631,5.271a.661.661,0,0,0-.658-.6H63.146a4.742,4.742,0,0,0-9.482,0H50.837a.658.658,0,0,0-.658.6L48.8,20.746c0,.02,0,.039,0,.059A3.42,3.42,0,0,0,52.4,24h12a3.42,3.42,0,0,0,3.6-3.2A.239.239,0,0,0,68,20.746ZM58.4,1.325a3.419,3.419,0,0,1,3.416,3.342H54.989A3.419,3.419,0,0,1,58.4,1.325Zm6,21.35h-12a2.114,2.114,0,0,1-2.277-1.84L51.44,6h2.218V8.01a.663.663,0,1,0,1.325,0V6h6.837V8.01a.663.663,0,0,0,1.325,0V6h2.218l1.32,14.837A2.118,2.118,0,0,1,64.407,22.675Z"
                        transform="translate(-48.8)" fill="#212121" />
                </svg>
                <span className='count'>{cartItems.length}</span>
              </Link>
            </button>
    </header>
  )
}

export default Header