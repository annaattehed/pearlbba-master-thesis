import React from 'react';
import Imagecards from '../Imagecards/Imagecards';
import './Bestsellers.scss';

const BestSellers = ({type}) => {

    const data = [  
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
            title: "Chain bracelet in goldplatted",
            isNew:true,
            oldPrice: 199,
            price: 149,

        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1573446238824-c28afa0cd312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
            title: "Thin bracelets goldplatted",
            isNew:false,
            oldPrice: 299,
            price: 199,

        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1110&q=80",
            title: "Lots of rings",
            isNew:true,
            oldPrice: 250,
            price: 225,

        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80",
            title: "Necklaces in sterling silver",
            isNew:true,
            oldPrice: 399,
            price: 299,

        },

    ]

    return (
        <div className='bestSellers'>

            <div className="top-homepage-products">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. 
                    </p>
            </div>
            <div className="bottom-homepage-products">
                {data.map(item=>(
                    <Imagecards item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
    
}


export default BestSellers