import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import "./Grandpa.css"

export const RingContext = createContext('defaultValue');
export const TakaOnek = createContext(0)
const Grandpa = () => {
    const [money,setMoney]=useState(0);

    return (
        <div className='grandpa border-2 border-orange-400 p-3 m-3' >
            <h2>Grandpa</h2>
            <h2>Grandpa taka: {money}</h2>
       <TakaOnek.Provider value={[money,setMoney]}>
       <RingContext.Provider value='new value'>
          <section className='flex'>
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty> 
            </section>
          </RingContext.Provider>
       </TakaOnek.Provider>
        </div>
    );
};

export default Grandpa;