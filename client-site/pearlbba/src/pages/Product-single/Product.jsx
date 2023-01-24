import React from 'react';
import { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = () => {

  
  const [selectedImg,setSelectedImg] =useState(0)

  const [quantity,setQuantity] =useState(1)

    // inte rätt bilder 

  const images = [
    "https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ]
  return (
    <div className='product-single'>
      <div className="productpage-left-section">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="productpage-right-section">
        <h1>PRODUCT TITLE</h1>
        <span className='product-price'>PRODUCT PRICE</span>
        <p> PRODUCT INFO - Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Culpa dolores, autem iste nam commodi fugiat ratione, neque
          soluta vero tempora minus, eius nihil at ex labore corporis 
          fuga dignissimos quisquam.
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev-1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add-to-cart'>
          <AddShoppingCartIcon /> ADD TO CART 
        </button>
        <div className="link">
          <div className="item">
          <FavoriteBorderIcon /> ADD TO WISHLIST 
          </div>
        </div>
        <div className="product-information">
          <span>PRODUCT DESCRIPTION</span>
          <hr />
          <span>OTHER ADDITIONAL INFORMATION</span>
          <hr />
          <span>SHOP WITH US - THE DETAILS</span>
        </div>
      </div>
    </div>
  );
};

export default Product