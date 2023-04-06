import React from "react";

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { picture, name, price,_id } = tshirt;
  return (
    <div className="border border-blue-400 m-3 text-center py-3 px-3 rounded-xl leading-9">
      <img
        className="h-[250px] w-full mx-auto rounded-xl"
        src={picture}
        alt=""
      />
      <h2>{name}</h2>
      <h2>Price: ${price}</h2>
      <button
        className="bg-white text-black px-2 py-0 hover:shadow-lg hover:shadow-white transition-all"
        onClick={() => handleAddToCart(_id)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Tshirt;
