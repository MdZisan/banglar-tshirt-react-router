import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = "please add some product";
  }

  return (
    <div className="border rounded-lg sticky top-3">
      <h2 className="text-3xl underline">Order summary: {cart.length}</h2>


      <div>{cart.length > 2 ? <span>Buy more</span> : ""}</div>
      
      
      <div className="text-red-600 text-xl"> {message}</div>
      
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {
        cart.length >4 && <span> boroloxx</span>
      }
      {
          cart.length === 3 || <span>Tin ta to holo nah</span>
        }
    </div>
  );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that Will contain an element, components
 * 2. ternary operator: condition? for true" 'false
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false then the next thing will be displayed)
 * */
