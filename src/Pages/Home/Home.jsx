import React from "react";
import Hero from "../../Components/Hero/Hero";
import OnlineItem from "../../Components/OnilneItem/OnlineItem";

const Home = () => {
  return (
    <div>
      <Hero />
      <OnlineItem
        title={"-- From 11:00PM to 10:00PM -- "}
        description={"ORDER ONLINE"}
      />
    </div>
  );
};

export default Home;
