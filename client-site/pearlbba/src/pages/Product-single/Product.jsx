import React from 'react';
import { useState, useParams } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {

  // getting products by id and display right media
  
  const id = useParams().id;
  const [selectedImg,setSelectedImg] =useState("img")
  const [quantity,setQuantity] =useState(1)

  const dispatch =useDispatch();
  const { data, loading } = useFetch(`/products/${id}?populate=*`);

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
        <h1>{data?.attributes?.title}</h1>
        <span className='product-price'>data?.attributes?.price</span>
        <p> 
          {data?.attributes?.description}
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev-1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add-to-cart' onClick={()=>dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          desc:data.attributes.description,
          price:data.attributes.price,
          img:data.attributes.img.data.attributes.url,
          quantity,
        }))}>
          <AddShoppingCartIcon /> ADD TO CART 
        </button>
        <div className="link">
          <div className="item">
          <FavoriteBorderIcon /> ADD TO WISHLIST 
          </div>
        </div>
      </div></>)}
    </div>
  );
};

export default Product