import React, { useContext } from 'react';
import { TakaOnek } from '../Grandpa/Grandpa';

const Friend = () => {
    const [money,setMoney]=useContext(TakaOnek);
    const takaPathai = (amount)=>{
        setMoney(money+amount)
    }
    return (
        <div>
            <h2>Friend</h2>
            <p>Dadar taka ache : {money}</p>
            <button onClick={()=>takaPathai(10)}>10 Taka</button>
         
            <button onClick={()=>takaPathai(100)}>100Taka</button>
            <button onClick={()=>takaPathai(1000)}>1000 Taka</button>
        
        </div>
    );
};

export default Friend;