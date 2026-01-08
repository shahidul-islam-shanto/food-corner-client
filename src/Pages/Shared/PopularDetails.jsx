import React from "react";

const PopularDetails = ({ popularItem }) => {
  const { name, image, recipe, price } = popularItem;
  return (
    <div className="flex justify-between items-center gap-4 bg-nu20 px-4 py-2 h-full rounded-md">
      <img className="w-36 h-26" src={image} alt="" />
      <div className="">
        <p className="font-cinzel uppercase mb-2">{name} ----------------</p>
        <p className="text-nu40">{recipe}</p>
      </div>
      <p className="text-nu102 font-semibold">${price}</p>
    </div>
  );
};

export default PopularDetails;
