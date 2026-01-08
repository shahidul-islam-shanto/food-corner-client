import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PopularDetails from "../Shared/PopularDetails";

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
        <div className="grid grid-cols-12 gap-6">
          {popularItem.map((item) => (
            <div className="col-span-6">
              <PopularDetails key={item._id} popularItem={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
