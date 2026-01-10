import React from "react";

const RecommendCard = ({ recommendCord }) => {
  const { image, name, recipe } = recommendCord;
  return (
    <div>
      <div className="bg-nu20 px-4 py-4 rounded-md w-full h-full">
        <img className="w-full h-full mb-6" src={image} alt="" />
        <div className="text-center ">
          <h4 className="text-nu60 font-semibold mb-2">{name}</h4>
          <p className="text-nu60 font-normal">{recipe}</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
