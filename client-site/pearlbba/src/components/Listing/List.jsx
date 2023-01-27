import React from 'react'
import Imagecards from '../Imagecards/Imagecards'

// suppose to be via api but here still via local data 

const List = () => {

    const data = [  
        {
            id: 1,
            img: <img src="images/berrys.jpg" alt="Bracelet with cherry berrys"/>,
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
            title: "Rings",
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

    <div className='imglist'>
        {data?.map(item=>(
         <Imagecards item={item} key={item.id}/>
    ))}
    </div>
  )
}

export default List