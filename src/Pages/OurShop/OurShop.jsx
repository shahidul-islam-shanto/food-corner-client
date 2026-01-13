import React from "react";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import { Helmet } from "react-helmet";
import OurShopImg from "../../assets/images/our-shop/our-shop1.png";

const OurShop = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Corner - Our Shop</title>
      </Helmet>
      <div className="">
        <BredCrumb
          title={"OUR SHOP"}
          subTitle={"Would you like to try a dish?"}
          BredCrumbImg={OurShopImg}
        />
      </div>
      <div className="lg:py-25 md:py-22 sm:py-20 py-18 bg-nu10">
        <div className="container-2">
          <div className="tabs tabs-border  border-0 flex justify-center items-center">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-nu60 font-medium text-[24px] duration-500"
              aria-label="Salad"
            />
            <div className="tab-content border-0 px-10 py-10">
              Tab content 1
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-nu60 font-medium text-[24px] duration-500"
              aria-label="Pizza"
              defaultChecked
            />
            <div className="tab-content border-0  px-10 py-10">
              Tab content 2
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-nu60 font-medium text-[24px] duration-500"
              aria-label="Soups"
            />
            <div className="tab-content border-0 px-10 py-10">
              Tab content 3
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-nu60 font-medium text-[24px] duration-500"
              aria-label="Desserts"
            />
            <div className="tab-content border-0 px-10 py-10">
              Tab content 4
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-nu60 font-medium text-[24px] duration-500 "
              aria-label="Drinks"
            />
            <div className="tab-content border-0 px-10 py-10">
              Tab content 5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
