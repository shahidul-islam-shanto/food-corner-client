import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import BredCrumbImg from "../../assets/images/our-menu/our-menu.png";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ItemMenus1 from "../../assets/images/our-menu/our-menu-item1.png";
import ItemMenus2 from "../../assets/images/our-menu/our-menu-item2.png";
import ItemMenus3 from "../../assets/images/our-menu/our-menu-item3.png";
import ItemMenus4 from "../../assets/images/our-menu/our-menu-item4.png";
import ItemMenus5 from "../../assets/images/our-menu/our-menu-item5.png";
import ItemMenus6 from "../../assets/images/our-menu/our-menu-item6.png";
import ItemMenus7 from "../../assets/images/our-menu/our-menu-item7.png";

import useMenu from "../../hooks/useMenu";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menuItems] = useMenu();
  const salad = menuItems.filter((item) => item.category === "salad");
  const drinks = menuItems.filter((item) => item.category === "drinks");
  const popular = menuItems.filter((item) => item.category === "popular");
  const dessert = menuItems.filter((item) => item.category === "dessert");
  const pizza = menuItems.filter((item) => item.category === "pizza");
  const soup = menuItems.filter((item) => item.category === "soup");
  const offered = menuItems.filter((item) => item.category === "offered");

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
      <div className="lg:py-25 md:py-22 sm:py-20 py-18 bg-nu10">
        <SectionTitle title={"---Don't miss---"} subTitle={"TODAY'S OFFER"} />
        <div className="container-2">
          <div className="">
            {/* Salad item */}
            <MenuCategory
              itemCategory={dessert}
              ItemMenus={ItemMenus1}
              title={"dessert"}
            />
            {/* Pizza item */}
            <MenuCategory
              itemCategory={pizza}
              ItemMenus={ItemMenus2}
              title={"pizza"}
            />
            {/* Salad item */}
            <MenuCategory
              itemCategory={salad}
              ItemMenus={ItemMenus3}
              title={"salad"}
            />
            {/* Soup item */}
            <MenuCategory
              itemCategory={soup}
              ItemMenus={ItemMenus4}
              title={"soup"}
            />
            {/* Drinks item */}
            <MenuCategory
              itemCategory={drinks}
              ItemMenus={ItemMenus5}
              title={"drinks"}
            />
            {/* Popular item */}
            <MenuCategory
              itemCategory={popular}
              ItemMenus={ItemMenus6}
              title={"popular"}
            />
            {/* Offered item */}
            <MenuCategory
              itemCategory={offered}
              ItemMenus={ItemMenus7}
              title={"offered"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
