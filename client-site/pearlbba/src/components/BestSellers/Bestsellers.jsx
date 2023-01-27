import React from 'react';
import Imagecards from '../Imagecards/Imagecards';
import './Bestsellers.scss';
import useFetch from '../../hooks/useFetch';

const BestSellers = ( { type }) => {

   // fetching product data from api 
   const { data, loading, error } = useFetch(
      `/products?populate=*&[filters][type][$eq]=${type}`
   );

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
                {error
                 ? "something went wrong"
                 : loading 
                   ? "loading" 
                   : data?.map((item) => <Imagecards item={item} key={item.id} /> )}
            </div>
        </div>
    )
    
}

export default BestSellers
