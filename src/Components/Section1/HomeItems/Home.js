import React from "react";

import "./Home.css";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

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
