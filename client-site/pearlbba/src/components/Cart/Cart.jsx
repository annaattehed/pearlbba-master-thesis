import React from 'react';
import './Cart.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector } from 'react';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeMyRequests';

const Cart = () => {

const products = useSelector((state)=>state.cart.products);
const dispatch =useDispatch();

// getting the totalprice generated with only two decimals 
const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
}
const stripePromise = loadStripe('pk_test_51MUf5rCCAWctOC9ZdG9GrBxoecXNTh12He1iMnVqmuTh69KB60CTciPqRXuoa5n6TaAQ7iNtW8ueMTGwIR67MHiM002zJclOBc');

const handlePayment = async()=>{
    try{
        const stripeConn = await stripePromise;

        const res = await makeRequest.post("/orders", {
            products,
        });

        await stripeConn.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
        })

    }catch(err){
        console.log(err)
    }
}
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
                <div className="price"> {item.quantity} x {item.price} kr</div>
            </div>
             <DeleteOutlineIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="cart-total">
            <span>Subtotal:</span>
            <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className='empty-cart' onClick={()=>dispatch(resetCart())}>EMPTY CART</span>
       
    </div>
  );
};

export default Cart