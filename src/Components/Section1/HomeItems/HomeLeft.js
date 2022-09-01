import React from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import Phone from "./Phone/Phone";
import Chart1 from "../../Files/chart1.jpg";
import Chart2 from "../../Files/chart2.jpg";

import "./Homeleft.css";

const HomeLeft = () => {
  return (
    <div className="homeLeft">
      <div className="topGlass">
        <div className="glassNav">
          <div className="glassTopic">
            <div
              style={{
                backgroundColor: "white",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                margin: "0 1rem",
              }}
            ></div>
            ROCKET RIDES <FaChevronDown style={{ margin: "0 .5rem" }} />
          </div>
          <div className="searchBox">
            <span>
              <FaSearch />
            </span>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <Phone />
        <div className="charts">
          <img src={Chart1} alt="" />
          <img src={Chart2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
