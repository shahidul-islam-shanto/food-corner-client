import React from "react";
import Hero from "../../Components/Hero/Hero";
import OnlineItem from "../../Components/OnilneItem/OnlineItem";
import Rectangle from "../../Components/Rectangle/Rectangle";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Hero />
      <OnlineItem />
      <Rectangle />
      <PopularMenu />
    </div>
  );
};

export default Home;
