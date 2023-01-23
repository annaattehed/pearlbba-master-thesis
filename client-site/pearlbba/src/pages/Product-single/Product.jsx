import React from 'react';
import './Product.scss';

const Product = () => {

  const images = [
    "https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ]
  return (
    <div className='product-single'>
      <div className="productpage-left-section">
        <div className="images">
          <img src={images[0]} alt="" />
          <img src={images[1]} alt="" />
        </div>
      </div>
      <div className="productpage-right-section">
        
      </div>
    </div>
  )
}

export default Product