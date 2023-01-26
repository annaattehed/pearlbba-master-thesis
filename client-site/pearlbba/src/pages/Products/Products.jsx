import React from 'react';
import './Products.scss';
import List from '../../components/Listing/List';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Products = () => {

  const catId = parseInt(useParams().id);

  // making range-values dynamic

  const [maxPrice,setMaxPrice] = useState(1000)

  // sorting categories 

  const [sort,setSort] = useState(null);

  return (
    <div className='products'>
      <div className="left-section">
        <div className="product-sidebar">
          <h2>Product Categories</h2>
          <div className="input-item">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor='1'>Necklaces</label>
          </div>
          <div className="input-item">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor='2'>Bracelets</label>
          </div>
          <div className="input-item">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor='3'>Rings</label>
          </div>
        </div>
        <div className="product-sidebar">
          <h2>Filter by price</h2>
          <div className="input-item">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} /> 
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="product-sidebar">
          <h2>Sort products by</h2>
          <div className="input-item">
            <input type="radio" name="price" id="asc" value="asc" onChange={e=>setSort("asc")} />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="input-item">
            <input type="radio" name="price" id="desc" value="desc" onChange={e=>setSort("asc")} />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img className="categoryImg"
         src="https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
         alt=""
         />
         <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products