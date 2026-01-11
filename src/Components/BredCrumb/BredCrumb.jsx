import React from "react";
// import OurMenu from "../../assets/images/our-menu/our-menu.png";

const BredCrumb = ({ title, subTitle, BredCrumbImg }) => {
  return (
    <section className="relative">
      <img src={BredCrumbImg} alt="" />
      <div className="w-[60%] h-[60%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00000075]">
        <div className="container-2 h-full flex justify-center items-center">
          <div className="">
            <h1 className="text-nu10 font-semibold mb-4 text-center">
              {title}
            </h1>
            <p className="text-nu10 font-medium text-center">{subTitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BredCrumb;
