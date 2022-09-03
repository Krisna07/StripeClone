import React from "react";
import HoverBtn from "../HoverBtn";

import "./Sections.css";

const Sections = ({
  topics,
  headings,
  des,
  btnText,
  Color,
  textColor,
  rightItem,
}) => {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionsLeft">
          <div className="sectionDes">
            <h4>{topics}</h4>
            <h2 style={{ color: "black", fontSize: "40px" }}>{headings}</h2>
            <p style={{ color: "black" }}>{des}</p>
            <HoverBtn text={btnText} color={Color} textColor={textColor} />
          </div>
          <div className="sectionItems"></div>
        </div>
        <div className="sectionsRight">{rightItem}</div>
      </div>
    </div>
  );
};

export default Sections;

// <div className="sectiondes">
