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
  secondaryBtn,
  Secheadings,
}) => {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionsLeft">
          <div className="sectionDes">
            {topics ? <span style={{ fontWeight: "bold" }}>{topics}</span> : ""}
            {headings ? (
              <span
                style={{ color: "black", fontSize: "40px", fontWeight: "bold" }}
              >
                {headings}
              </span>
            ) : (
              ""
            )}
            {Secheadings ? (
              <span
                style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}
              >
                {Secheadings}
              </span>
            ) : (
              ""
            )}
            <p style={{ color: "black" }}>{des}</p>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <HoverBtn text={btnText} color={Color} textColor={textColor} />
              {secondaryBtn ? (
                <HoverBtn text={secondaryBtn} textColor={Color} />
              ) : (
                ""
              )}
            </div>
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
