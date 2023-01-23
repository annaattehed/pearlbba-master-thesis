import React from 'react';
import './Imagecards.scss';
import {Link} from 'react-router-dom';

const Imagecards = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
    <div className='imagecards'>
        <div className='image'>
            {item.isNew && <span>This just in!</span>}
            <img src="{item.img}" alt="" className="image" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Imagecards