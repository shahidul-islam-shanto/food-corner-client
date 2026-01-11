import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import BredCrumbImg from "../../assets/images/our-menu/our-menu.png";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import OurMenuItems from "./OurMenuItems";
import OurMenuItemImg from "./OurMenuItemImg";
import ItemMenus from "../../assets/images/our-menu/our-menu-item1.png";

const OurMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [groupedItems, setGroupedItems] = useState({});

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);

        const grouped = {};
        data.forEach((item) => {
          if (!grouped[item.category]) {
            grouped[item.category] = [];
          }
          grouped[item.category].push(item);
        });

        setGroupedItems(grouped);
      });
  }, []);

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Corner - Our Menu</title>
      </Helmet>
      <div className="">
        <BredCrumb
          title={"OUR MENU"}
          subTitle={"Would you like to try a dish?"}
          BredCrumbImg={BredCrumbImg}
        />
      </div>
      <div className="lg:pt-25 md:pt-22 sm:pt-20 pt-18 bg-nu10">
        <SectionTitle title={"---Don't miss---"} subTitle={"TODAY'S OFFER"} />
        <div className="container-2">
          {Object.keys(groupedItems).map((category) => (
            <div key={category} className="">
              <div className="grid grid-cols-12 gap-6">
                {groupedItems[category].map((item) => (
                  <div key={item._id} className="col-span-12 md:col-span-6 ">
                    <OurMenuItems menusItem={item} />
                  </div>
                ))}
              </div>

              <OurMenuItemImg
                categoryImg={category}
                BredCrumbImg={ItemMenus}
                subTitle={
                  "Welcome to our cozy and vibrant restaurant, where every meal is a celebration of flavors. We specialize in serving fresh, high-quality dishes made from locally sourced ingredients."
                }
              />

              <div className="text-center mb-14">
                <button className="border-b-2 border-nu60 hover:bg-nu60 hover:text-nu10 duration-500 px-6 py-3 rounded-xl font-medium">
                  ORDER YOUR FAVOURITE FOOD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
