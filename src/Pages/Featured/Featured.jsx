import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import "./Featured.css";
import Features from "../../assets/images/hero-img/features2.png";

const Featured = () => {
  return (
    <>
      <div className="feature-section text-nu10 py-34 ">
        <div className="container-2">
          <div className="text-center mb-14">
            <h4 className="text-nu10 font-cinzel mb-3">---Check it out---</h4>
            <h2 className="text-nu10 font-semibold py-3 border-y-2 inline-block border-nu102">
              FROM OUR MENU
            </h2>
          </div>

          <div className="">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-6">
                <img src={Features} alt="" />
              </div>
              <div className="col-span-6">
                <div className="">
                  <h4 className="mb-3 font-medium">March 20, 2023</h4>
                  <h4 className="mb-3 font-medium">WHERE CAN I GET SOME?</h4>
                  <p className="text-nu10 font-normal mb-8">
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
                  <div className="">
                    <button className="border-b-2 border-nu10 hover:bg-nu10 hover:text-nu60 duration-300 px-6 py-2 rounded-xl font-medium">
                      Read More
                    </button>
                  </div>
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
