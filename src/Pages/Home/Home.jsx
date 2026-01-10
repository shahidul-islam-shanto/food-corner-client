import React from "react";
import Hero from "../../Components/Hero/Hero";
import OnlineItem from "../../Components/OnilneItem/OnlineItem";
import Rectangle from "../../Components/Rectangle/Rectangle";
import PopularMenu from "../PopularMenu/PopularMenu";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import Recommends from "../Recommends/Recommends";

const Home = () => {
  return (
    <div>
      <Hero />
      <OnlineItem />
      <Rectangle />
      <PopularMenu />
      <ContactSection />
      <Recommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
