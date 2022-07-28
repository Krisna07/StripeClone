import React from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import HoverBtn from "../HoverBtn";
import "./Home.css";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import Sponsers from "./Sponsers";

const Home = () => {
  return (
    <div className="home">
      <div className="homeRight">
        <HomeRight />
      </div>
      <div className="homeLeft">
        <HomeLeft />
      </div>
    </div>
  );
};

export default Home;
