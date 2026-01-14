import React from "react";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import { Helmet } from "react-helmet";
import OurShopImg from "../../assets/images/our-shop/our-shop1.png";
import OurShopTabs from "./OurShopTabs";

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
          <OurShopTabs />
        </div>
      </div>
    </div>
  );
};

export default OurShop;
