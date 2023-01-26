import React from 'react';
import { useState, useParams } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useFetch from '../../hooks/useFetch';

const Product = () => {

  const id = useParams().id;
  const [selectedImg,setSelectedImg] =useState("img")
  const [quantity,setQuantity] =useState(1)

  const { data, loading } = useFetch(`/products/${id}?populate=*`);

    // inte rätt bilder 

  // const images = [
  //   "https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  // ]
  return (
    <div className='product-single'>
      {loading ? "loading" : (<><div className="productpage-left-section">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.img?.data?.attributes?.url} 
          alt="" onClick={e=>setSelectedImg("img")} />

          <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.img2?.data?.attributes?.url} 
          alt="" onClick={e=>setSelectedImg("img2")}/>
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="productpage-right-section">
        <h1>{data?.attributes?.Title}</h1>
        <span className='product-price'>data?.attributes?.Price</span>
        <p> 
          {data?.attributes?.Description}
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
      </div></>)}
    </div>
  );
};

export default Product