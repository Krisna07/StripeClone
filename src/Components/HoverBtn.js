import React from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const HoverBtn = ({ text, color, textColor, size, padding }) => {
  return (
    <div
      className="hoverItem"
      style={{
        background: `${color}`,
        color: `${textColor}`,
        fontSize: `${size}`,
        padding: `${padding}`,
      }}
    >
      <div className="hoverBtn">
        <span className="btnText">{text}</span>
        <div className="arrows">
          <FaArrowRight className="hoverArrow" />
          <FaChevronRight className="arrowFirst" />
        </div>
      </div>
    </div>
  );
};

export default HoverBtn;
