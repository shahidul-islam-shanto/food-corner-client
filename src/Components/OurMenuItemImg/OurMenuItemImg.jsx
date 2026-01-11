import React from "react";
import "../../Pages/OurMenu/OurMenuItems";
import "./OurMenuItemImg.css";

const OurMenuItemImg = ({ categoryImg, BredCrumbImg, subTitle }) => {
  return (
    <>
      <section className="relative py-16">
        <img className="bg-fixed" src={BredCrumbImg} alt="" />
        <div className="w-[60%] h-[60%] px-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00000075]">
          <div className="container-2 h-full flex justify-center items-center">
            <div className="">
              <h1 className="display-3 font-cinzel text-nu10 font-semibold mb-4 text-center">
                {categoryImg}
              </h1>
              <p className="text-nu10 font-medium text-center">{subTitle}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMenuItemImg;
