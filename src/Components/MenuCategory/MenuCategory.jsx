import React from "react";
import OurMenuItems from "../../Pages/OurMenu/OurMenuItems";
import OurMenuItemImg from "../OurMenuItemImg/OurMenuItemImg";
import { Link } from "react-router-dom";

const MenuCategory = ({ itemCategory, salad, ItemMenus }) => {
  return (
    <div>
      <OurMenuItemImg
        categoryImg={salad}
        BredCrumbImg={ItemMenus}
        subTitle={
          "Welcome to our cozy and vibrant restaurant, where every meal is a celebration of flavors. We specialize in serving fresh, high-quality dishes made from locally sourced ingredients."
        }
      />

      <div className="grid grid-cols-12 gap-6 mb-14">
        {itemCategory.map((item) => (
          <div key={item._id} className="col-span-12 md:col-span-6 ">
            <OurMenuItems menusItem={item} />
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to={""}>
          <button className="border-b-2 border-nu60 hover:bg-nu60 hover:text-nu10 duration-500 px-6 py-3 rounded-xl font-medium">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
