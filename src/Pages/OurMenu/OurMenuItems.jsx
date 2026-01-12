import React from "react";

const OurMenuItems = ({ menusItem }) => {
  return (
    <div className="flex justify-between items-center gap-6 bg-nu20 px-4 py-2 h-full rounded-md">
      <img
        className="w-34 h-26 rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]"
        src={menusItem.image}
        alt={menusItem.name}
      />
      <div className="">
        <p className="font-cinzel uppercase mb-2">
          {menusItem.name} ------------
        </p>
        <p className="text-nu40">{menusItem.recipe}</p>
      </div>
      <p className="text-nu102 font-semibold">${menusItem.price}</p>
    </div>
  );
};

export default OurMenuItems;
