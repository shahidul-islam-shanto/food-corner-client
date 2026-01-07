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

const OnlineItem = ({ title, description }) => {
  return (
    <div>
      <div className="py-20 bg-nu10">
        <div className="container-2">
          <div className="text-center mb-14">
            <h4 className="text-primary1 font-cinzel mb-3">{title}</h4>
            <h2 className="text-primary1 font-semibold">{description}</h2>
          </div>
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
            <SwiperSlide>
              <img src={Slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OnlineItem;
