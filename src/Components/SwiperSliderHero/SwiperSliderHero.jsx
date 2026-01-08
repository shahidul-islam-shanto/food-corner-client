import React, { useRef, useState } from "react";
import Hero1 from "../../assets/images/hero-img/hero1.png";
import Hero2 from "../../assets/images/hero-img/hero2.png";
import Hero3 from "../../assets/images/hero-img/hero3.png";
import Hero4 from "../../assets/images/hero-img/hero4.png";
import Hero5 from "../../assets/images/hero-img/hero5.png";
import HeroSm1 from "../../assets/images/hero-img/hero-sm1.png";
import HeroSm2 from "../../assets/images/hero-img/hero-sm2.png";
import HeroSm3 from "../../assets/images/hero-img/hero-sm3.png";
import HeroSm4 from "../../assets/images/hero-img/hero-sm4.png";
import HeroSm5 from "../../assets/images/hero-img/hero-sm5.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./SwiperSliderHero.css";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

const SwiperSliderHero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="bg-nu10 ">
        <div className="mb-16">
          <Swiper
            style={{
              "--swiper-navigation-color": "#eeff25",
              "--swiper-pagination-color": "#eeff25",
            }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Autoplay, FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img className="w-full h-full" src={Hero1} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-full" src={Hero2} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-full" src={Hero3} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-full" src={Hero4} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-full" src={Hero5} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="">
          <div className="container-2">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={30}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={HeroSm1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={HeroSm2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={HeroSm3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={HeroSm4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={HeroSm5} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperSliderHero;
