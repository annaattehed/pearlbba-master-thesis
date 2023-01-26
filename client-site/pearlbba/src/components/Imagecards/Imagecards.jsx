import React from 'react';
import './Imagecards.scss';
import {Link} from 'react-router-dom';

const Imagecards = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
    <div className='imagecards'>
        <div className='image'>
            {item?.attributes.isNew && <span>This just in!</span>}
            <img src="{item.img}" alt="" className="image" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>${item.oldPrice || item?.attributes.price + 10}</h3>
            <h3>${item?.attributes.price}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Imagecards