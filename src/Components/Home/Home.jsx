import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import { Toaster, toast } from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart]=useState([]);

    const handleAddToCart= tshirt =>{
      const exited = cart.find(ts=> ts._id=== tshirt._id);
      if(exited){
        toast.error('Already added',{
          style:{
            borderRadius:"20px",
          }
        });
      
      }
      else{
        const newCart= [...cart,tshirt];
        setCart(newCart);
      }
    
    }
    const handleRemoveFromCart= id =>{
     const remaining = cart.filter(ts=>ts._id!== id);
     setCart(remaining)
    }
    return (
      <div className='home-container grid md:grid-cols-4 gap-2 mt-5'>
         
        <div className='tshirt-container col-span-3 grid md:grid-cols-3'>
        {
            tshirts.map(tshirt=><Tshirt 
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
            ></Tshirt>)
          }
        </div>
        <div className="card-container">
          <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
        </div>
        </div>
    );
};

export default Home;