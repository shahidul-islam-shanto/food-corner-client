import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PopularDetails from "../Shared/PopularDetails";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [popularItem, setPopularItem] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const itemPopular = data.slice(0, 6);
        setPopularItem(itemPopular);
      });
  }, []);
  return (
    <div className="lg:pt-25 md:pt-22 sm:pt-20 pt-18 bg-nu10">
      <div className="container-2">
        <div className="">
          <SectionTitle
            title={"--- Check it out ---"}
            subTitle={"FROM OUR MENU"}
          />
        </div>
        <div className="grid grid-cols-12 gap-6 mb-12">
          {popularItem.map((item) => (
            <div className="col-span-6">
              <PopularDetails key={item._id} popularItem={item} />
            </div>
          ))}
        </div>
        <div className="text-center mb-14">
          <Link to={""}>
            <button className="border-b-2 border-nu60 hover:bg-nu60 hover:text-nu10 duration-500 px-6 py-3 rounded-xl font-medium">
              View Full Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
