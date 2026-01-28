import React from "react";

const RecommendCard = ({ recommendCord }) => {
  const { image, name, recipe } = recommendCord;

  const handleAddToCart = (food) => {
    console.log(food);
  };

  return (
    <div className="bg-nu20 px-6 py-6 rounded-md w-full h-full">
      <img className=" mb-6 rounded-md" src={image} alt="" />
      <div className="text-center mb-6">
        <h4 className="text-nu60 font-semibold mb-2">{name}</h4>
        <p className="text-nu60 font-normal h-full">{recipe}</p>
      </div>
      <div className="text-center">
        <button
          onClick={() => handleAddToCart(recommendCord)}
          className="px-6 py-3 border-b-2 border-nu102 hover:border-nu60 font-medium bg-nu30 hover:bg-nu60 text-nu102 duration-300 uppercase rounded-lg"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default RecommendCard;
