import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart]=useState([]);

    const handleAddToCart= tshirt =>{
      console.log(tshirt);
    }
    return (
        <div className='home-container grid grid-cols-4 gap-2 mt-5'>
        <div className='tshirt-container col-span-3 grid grid-cols-3'>
        {
            tshirts.map(tshirt=><Tshirt 
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
            ></Tshirt>)
          }
        </div>
        <div className="card-container">
          <Cart></Cart>
        </div>
        </div>
    );
};

export default Home;