import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import "./Navbar.scss";
import { useSelector } from 'react';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


const Navbar = () => {

  const[open,setOpen] = useState(false);
  const products = useSelector((state)=>state.cart.products);
  
  return (
    <div className="navbar">
      <div className="wrapper-navbar">
        <div className="left-section">
            <div className="section-links">
              <Link className='link' to="/products/1">Necklaces</Link>
            </div>
            <div className="section-links">
              <Link className='link' to="/products/2">Bracelets</Link>
            </div>
            <div className="section-links">
              <Link className='link' to="/products/3">Rings</Link>
            </div>
        </div>

        <div className="center-section">
            <Link className='link' to="/">PEARLBBA - handmade jewellery online</Link>
        </div>

        <div className="right-section">
            <div className="section-links">
                <Link className='link' to="/">About</Link>
             </div>
             <div className="section-links">
                <Link className='link' to="/">Contact us</Link>
            </div>
              <div className="section-icons">
                <SearchTwoToneIcon/>
                <PersonOutlineTwoToneIcon/>
                <FavoriteTwoToneIcon/>
                  <div className="cart-icon" onClick={()=>setOpen(!open)}>
                    <ShoppingCartTwoToneIcon/>
                    <span>{products.length}</span>
                  </div>
              </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
    
  );
};

export default Navbar