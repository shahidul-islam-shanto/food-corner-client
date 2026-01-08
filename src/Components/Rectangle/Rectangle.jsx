import React from "react";
import RectImg from "../../assets/images/hero-img/rectangle.png";

const Rectangle = () => {
  return (
    <div className="lg:py-25 md:py-22 sm:py-20 py-18 bg-nu10">
      <div className="container-2">
        <div className="relative">
          <img className="w-full h-full" src={RectImg} alt="" />
          <div className="absolute bottom-28 left-1/2  -translate-x-1/2 bg-nu10 px-10 py-10">
            <h2 className="font-cinzel font-normal mb-2 text-center">Bistro Boss</h2>
            <p className="text-nu40 ">
              The restaurant offers a warm and welcoming atmosphere for all
              guests. It serves a variety of delicious dishes made from fresh
              and high-quality ingredients. The chefs carefully prepare each
              meal to ensure great taste and presentation. The staff are
              friendly and provide excellent customer service. Overall, the
              restaurant is a perfect place to enjoy good food with family and
              friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
