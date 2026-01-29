import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import RecommendCard from "./RecommendCard";

const Recommends = () => {
  const [recommend, setRecommend] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const cardRecommend = data.slice(0, 3);
        setRecommend(cardRecommend);
      });
  }, []);
  return (
    <section className="lg:pb-25 md:pb-22 sm:pb-20 pb-18 bg-nu10">
      <SectionTitle title={"---Should Try---"} subTitle={"CHEF RECOMMENDS"} />
      <div className="container-2">
        <div className="grid grid-cols-12 gap-6">
          {recommend.map((item) => (
            <div className="col-span-4 h-full">
              <RecommendCard key={item._id} recommendCord={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommends;
