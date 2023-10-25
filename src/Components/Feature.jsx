import { data } from "@/Mock/FeatureData";
import React from "react";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div className="container pt-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-4 gap-4 ">
        {data.map((item) => (
          <FeatureCard
            key={item.title}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
