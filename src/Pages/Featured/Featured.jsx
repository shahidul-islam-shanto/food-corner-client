import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import "./Featured.css";
import Features from "../../assets/images/hero-img/features2.png";

const Featured = () => {
  return (
    <>
      <div className="feature-section text-nu10  py-34">
        <div className="container-2 text-white">
          <SectionTitle
            title={"---Check it out---"}
            subTitle={"FROM OUR MENU"}
          />
          <div className="">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-6">
                <img src={Features} alt="" />
              </div>
              <div className="col-span-6">
                <div className="">
                  <h4>March 20, 2023</h4>
                  <h4>WHERE CAN I GET SOME?</h4>
                  <p>
                    Our restaurant offers a warm and welcoming atmosphere where
                    great taste meets exceptional service. Every dish is
                    carefully prepared using fresh, high-quality ingredients to
                    ensure rich flavor and consistent quality. We blend
                    traditional recipes with modern cooking techniques to create
                    a menu that appeals to every palate. From comforting
                    classics to innovative specialties, each item is crafted
                    with attention to detail. Our chefs are passionate about
                    delivering meals that are both visually appealing and
                    delicious.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
