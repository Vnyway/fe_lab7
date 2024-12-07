import React from "react";
import { GoodsCard } from "../components";
import { goods } from "../constants";

const Task2 = () => {
  return (
    <>
      {goods.map((item) => (
        <GoodsCard
          image={item.image}
          title={item.title}
          price={item.price}
          key={item.id}
        />
      ))}
    </>
  );
};

export default Task2;
