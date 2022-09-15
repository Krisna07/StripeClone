import React from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const HoverBtn = ({ text, color, textColor, padding }) => {
  return (
    <div
      className="hoverItem"
      style={{
        background: `${color}`,
        color: `${textColor}`,
        display: "flex",
        padding: `${padding}`,
      }}
    >
      <p>{text}</p>
      <div className="arrows">
        <FaArrowRight className="hoverArrow" />
        <FaChevronRight className="arrowFirst" />
      </div>
    </div>
  );
};

export default HoverBtn;
