import React from "react";
import Nav from "./Navbar/Nav";
import Home from "./HomeItems/Home";

import "./Section1.css";
import Sponsers from "./Sponsers";

const Section1 = () => {
  return (
    <div className="section1">
      <Nav />

      <Home />

      <Sponsers />
    </div>
  );
};

export default Section1;
