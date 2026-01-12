import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import BredCrumbImg from "../../assets/images/our-menu/our-menu.png";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import OurMenuItems from "./OurMenuItems";
import OurMenuItemImg from "../../Components/OurMenuItemImg/OurMenuItemImg";
import ItemMenus from "../../assets/images/our-menu/our-menu-item1.png";
import { Link } from "react-router-dom";
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
            <MenuCategory itemCategory={dessert} salad={"Dessert"} />
            <MenuCategory itemCategory={pizza} salad={"Pizza"} />
            <MenuCategory itemCategory={salad} salad={"Salad"} />
            <MenuCategory itemCategory={soup} salad={"Soup"} />
            <MenuCategory itemCategory={drinks} salad={"Drinks"} />
            <MenuCategory itemCategory={popular} salad={"Popular"} />
            <MenuCategory itemCategory={offered} salad={"Offered"} />

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
