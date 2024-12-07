import React from "react";

const GoodsCard = ({ image, price, title }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={title} />
      </div>
      <div className="card__content">
        <h3 className="card__content__title">{title}</h3>
        <span className="card__content__price">${price}</span>
      </div>
    </div>
  );
};

export default GoodsCard;
