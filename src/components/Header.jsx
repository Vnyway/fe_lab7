import React from "react";
import { el1Click } from "../functions/task1";

const Header = () => {
  return (
    <header>
      <h1 id="el1" onClick={() => el1Click()}>
        Житченко Богдан Русланович
      </h1>
    </header>
  );
};

export default Header;
