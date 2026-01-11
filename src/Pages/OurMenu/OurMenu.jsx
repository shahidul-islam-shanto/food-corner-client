import React from "react";
import { Helmet } from "react-helmet";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import BredCrumbImg from "../../assets/images/our-menu/our-menu.png";

const OurMenu = () => {
  return (
    <>
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
    </>
  );
};

export default OurMenu;
