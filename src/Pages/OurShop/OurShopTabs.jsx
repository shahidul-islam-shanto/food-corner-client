import React from "react";
import OurShopCard from "./OurShopCard";
import OurShopInput from "./OurShopInput";

const OurShopTabs = ({ salad, pizza, soup, dessert, drinks }) => {
  return (
    <div>
      <div className="tabs tabs-border  border-0 flex justify-center items-center">
        {/* card 1 */}
        <OurShopInput inputsCard={"Salad"} />
        <div className="tab-content border-0 px-10 py-10">
          <div className="grid grid-cols-12 gap-6">
            {salad.map((item) => (
              <OurShopCard items={item} />
            ))}
          </div>
        </div>
        {/* card 2 */}
        <OurShopInput inputsCard={"Pizza"} />
        <div className="tab-content border-0  px-10 py-10">
          <div className="grid grid-cols-12 gap-6">
            {pizza.map((item) => (
              <OurShopCard items={item} />
            ))}
          </div>
        </div>
        {/* card 3 */}
        <OurShopInput inputsCard={"Soup"} />
        <div className="tab-content border-0 px-10 py-10">
          <div className="grid grid-cols-12 gap-6">
            {soup.map((item) => (
              <OurShopCard items={item} />
            ))}
          </div>
        </div>
        {/* card 4 */}
        <OurShopInput inputsCard={"Dessert"} />
        <div className="tab-content border-0 px-10 py-10">
          <div className="grid grid-cols-12 gap-6">
            {dessert.map((item) => (
              <OurShopCard items={item} />
            ))}
          </div>
        </div>
        {/* card 5 */}
        <OurShopInput inputsCard={"Drinks"} />
        <div className="tab-content border-0 px-10 py-10">
          <div className="grid grid-cols-12 gap-6">
            {drinks.map((item) => (
              <OurShopCard items={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShopTabs;
