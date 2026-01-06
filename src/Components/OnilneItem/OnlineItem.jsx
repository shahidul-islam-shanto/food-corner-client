import React from "react";
import Slider from "../../assets/images/hero-img/slide1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./OnlineItem.css";

// import required modules
import { Pagination } from "swiper/modules";

const OnlineItem = () => {
  return (
    <div>
      <div className="py-20 bg-nu60">
        <div className="container-2">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OnlineItem;
