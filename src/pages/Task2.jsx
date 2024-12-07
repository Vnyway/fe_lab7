import React from "react";
import { GoodsCard } from "../components";
import { goods } from "../constants";
import "../Task2.css";
import { Link } from "react-router-dom";

const Task2 = () => {
  return (
    <main>
      <Link className="link" to="/">
        Завдання 1
      </Link>
      <h1>Товари</h1>
      <div className="cards-container">
        {goods.map((item) => (
          <GoodsCard
            image={item.image}
            title={item.title}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Task2;
