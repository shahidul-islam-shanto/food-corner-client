import React, { useState } from "react";
import OurShopCard from "./OurShopCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import { useParams } from "react-router-dom";

const OurShopTabs = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menuItems] = useMenu();
  const salad = menuItems.filter((item) => item.category === "salad");
  const pizza = menuItems.filter((item) => item.category === "pizza");
  const soup = menuItems.filter((item) => item.category === "soup");
  const dessert = menuItems.filter((item) => item.category === "dessert");
  const drinks = menuItems.filter((item) => item.category === "drinks");
  return (
    <div>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="mb-10"
      >
        <TabList className="flex justify-center items-center gap-4 mb-16">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-12 gap-6">
            {salad.map((item) => (
              <OurShopCard key={item._id} items={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-12 gap-6">
            {pizza.map((item) => (
              <OurShopCard key={item._id} items={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-12 gap-6">
            {soup.map((item) => (
              <OurShopCard key={item._id} items={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-12 gap-6">
            {dessert.map((item) => (
              <OurShopCard key={item._id} items={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-12 gap-6">
            {drinks.map((item) => (
              <OurShopCard key={item._id} items={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>

      <div className="flex justify-center items-center gap-4">
        <span className="px-3 py-3 rounded-full bg-nu30 hover:bg-nu102 duration-300">
          <IoIosArrowBack className="text-[20px]" />
        </span>
        <span className="px-4.5 py-2  font-medium rounded-full bg-nu30 hover:bg-nu102 duration-300">
          1
        </span>
        <span className="px-4.5 py-2  font-medium rounded-full bg-nu30 hover:bg-nu102 duration-300">
          2
        </span>
        <span className="px-4.5 py-2 font-medium  rounded-full bg-nu30 hover:bg-nu102 duration-300">
          3
        </span>
        <span className="px-3  py-3 rounded-full bg-nu30 hover:bg-nu102 duration-300">
          <IoIosArrowForward className="text-[20px]" />
        </span>
      </div>
    </div>
  );
};

export default OurShopTabs;
