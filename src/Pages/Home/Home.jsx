import React from "react";
import Hero from "../../Components/Hero/Hero";
import OnlineItem from "../../Components/OnilneItem/OnlineItem";
import Rectangle from "../../Components/Rectangle/Rectangle";
import PopularMenu from "../PopularMenu/PopularMenu";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Hero />
      <OnlineItem />
      <Rectangle />
      <PopularMenu />
      <ContactSection />
      <Featured />
    </div>
  );
};

export default Home;
