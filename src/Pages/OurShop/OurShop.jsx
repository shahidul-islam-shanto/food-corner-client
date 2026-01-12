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
    </div>
  );
};

export default OurShop;
