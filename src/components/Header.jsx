import React from "react";
import { el1Click } from "../functions/task1";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 id="el1" onClick={() => el1Click()}>
        Житченко Богдан Русланович
      </h1>
      <Link to="/task2">Завдання 2</Link>
    </header>
  );
};

export default Header;
