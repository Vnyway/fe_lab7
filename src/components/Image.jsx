import React from "react";
import {
  addImg,
  increaseImg,
  decreaseImg,
  deleteImg,
} from "../functions/task1";

const Image = () => {
  return (
    <section id="image-section">
      <div id="images">
        <a
          id="image"
          href="https://mista.ua/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/%D0%A5%D0%BC%D1%96%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD/%D0%9A%D0%BE%D0%B7%D1%8F%D1%82%D0%B8%D0%BD">
          <img
            width="600px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/%D0%97%D0%B0%D0%BB%D1%96%D0%B7%D0%BD%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB_P1740495_%D0%9A%D0%BE%D0%B7%D1%8F%D1%82%D0%B8%D0%BD.jpg/435px-%D0%97%D0%B0%D0%BB%D1%96%D0%B7%D0%BD%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB_P1740495_%D0%9A%D0%BE%D0%B7%D1%8F%D1%82%D0%B8%D0%BD.jpg"
            alt="Козятин"
          />
        </a>
      </div>
      <div id="buttons">
        <button onClick={() => addImg()}>Додати</button>
        <button onClick={() => increaseImg()}>Збільшити</button>
        <button onClick={() => decreaseImg()}>Зменшити</button>
        <button onClick={() => deleteImg()}>Видалити</button>
      </div>
    </section>
  );
};

export default Image;
