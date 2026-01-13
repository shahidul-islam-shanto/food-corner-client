import React from "react";

const OurShopCard = ({ items }) => {
  return (
    <div key={items._id} className="col-span-4">
      <div className="bg-nu20 px-4 py-4 rounded-md w-full h-full">
        <div className="relative">
          <img className="mb-6 rounded-md" src={items.image} alt="" />
          <div className=" absolute top-2 right-2">
            <p className="text-nu10 px-3 py-1 bg-nu80 font-medium rounded-md inline-block">
              ${items.price}
            </p>
          </div>
        </div>
        <div className="text-center mb-6">
          <h4 className="text-nu60 font-semibold mb-2">{items.name}</h4>
          <p className="text-nu60 font-normal h-full">{items.recipe}</p>
        </div>
        <div className="text-center">
          <button className="px-6 py-3 border-b-2 border-nu102 hover:border-nu60 font-medium bg-nu30 hover:bg-nu60 text-nu102 duration-300 uppercase rounded-lg">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurShopCard;
