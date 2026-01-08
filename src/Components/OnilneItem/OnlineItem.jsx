import React from "react";
import Slider1 from "../../assets/images/hero-img/slide1.png";
import Slider2 from "../../assets/images/hero-img/slide2.png";
import Slider3 from "../../assets/images/hero-img/slide3.png";
import Slider4 from "../../assets/images/hero-img/slide4.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./OnlineItem.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../SectionTitle/SectionTitle";

const OnlineItem = () => {
  return (
    <div>
      <div className="lg:py-25 md:py-22 sm:py-20 py-18 bg-nu10">
        <div className="container-2">
          <SectionTitle
            title={"-- From 11:00PM to 10:00PM -- "}
            subTitle={"ORDER ONLINE"}
          />
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="relative">
              <img className="" src={Slider1} alt="" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <h3 className="text-nu40 uppercase">Salads</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img className="" src={Slider2} alt="" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <h3 className="text-nu40 uppercase">Soups</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img className="" src={Slider3} alt="" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <h3 className="text-nu40 uppercase">Pizzas</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img className="" src={Slider4} alt="" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <h3 className="text-nu40 uppercase">Desserts</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OnlineItem;
