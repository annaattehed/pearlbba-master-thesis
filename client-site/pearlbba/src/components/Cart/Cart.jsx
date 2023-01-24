import React from 'react';
import './Cart.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

const data = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1110&q=80",
        title: "Chain bracelet in goldplatted",
        desc: "lorem lorem lorem lorem lorem",
        isNew:true,
        oldPrice: 199,
        price: 149,

    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1573446238824-c28afa0cd312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
        title: "Thin bracelets goldplatted",
        desc: "lorem lorem lorem lorem lorem",
        isNew:false,
        oldPrice: 299,
        price: 199,

    },
]
  return (
    <div className='cart'>
         <h1>These are your picks!</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="cart-details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p> 
                <div className="price">1 x {item.price} kr</div>
            </div>
             <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        <div className="cart-total">
            <span>Subtotal:</span>
            <span>1245kr</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='empty-cart'>EMPTY CART</span>
       
    </div>
  );
};

export default Cart