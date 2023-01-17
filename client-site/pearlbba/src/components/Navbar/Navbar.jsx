import React from 'react'
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper-navbar'>
        <div className='left-section'>
            <div className="item">
              <Link to="/products/1">Necklaces</Link>
            </div>
            <div className="item">
              <Link to="/products/2">Bracelets</Link>
            </div>
            <div className="item">
              <Link to="/products/3">Rings</Link>
            </div>
        </div>

        <div className='center-section'>
            <Link to="/">PEARLBBA - handmade jewellery online</Link>
        </div>

        <div className='right-section'>
            <div className='right-section-links'>
                <Link to="/">Homepage</Link>
            </div>
            <div className='right-section-links'>
                <Link to="/">About</Link>
             </div>
             <div className='right-section-links'>
                <Link to="/">Contact us</Link>
            </div>
            <div className="right-section-icons">
              <PersonOutlineTwoToneIcon/>
              <ShoppingCartTwoToneIcon/>
              <FavoriteTwoToneIcon/>
              <SearchTwoToneIcon/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar