import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Testimonials.css";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="lg:py-25 md:py-22 sm:py-20 py-18 bg-nu10">
      <SectionTitle
        title={"---What Our Clients Say---"}
        subTitle={"TESTIMONIALS"}
      />
      <div className="container-2">
        <Swiper
          navigation={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper bg-nu10"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="px-10 py-4">
                <div className="flex justify-center items-center mb-6">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={item.rating}
                    readOnly
                  />
                </div>
                {/* <img className="w-6 h-6" src={Testimonial} alt="" /> */}
                <p className="my-3">{item.details}</p>
                <h3 className="text-nu102">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
