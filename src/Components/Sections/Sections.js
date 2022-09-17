import React from "react";
import HoverBtn from "../HoverBtn";
import ListDes from "../ListDes/ListDes";

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
  fontColor,
  Secheadings,
  sectionItems,
}) => {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionsLeft">
          <div className="sectionDes " style={{ color: `${fontColor}` }}>
            {topics ? (
              <span
                className="sectionTopic"
                style={{ fontWeight: "bold", color: `${Color}` }}
              >
                {topics}
              </span>
            ) : (
              ""
            )}
            {headings ? <span className="sectionHeading">{headings}</span> : ""}
            {Secheadings ? (
              <span
                style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}
              >
                {Secheadings}
              </span>
            ) : (
              ""
            )}
            <p style={{ opacity: "0.8" }}>{des}</p>
            {btnText ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <HoverBtn text={btnText} color={Color} textColor={textColor} />
                {secondaryBtn ? (
                  <HoverBtn text={secondaryBtn} textColor={Color} />
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="sectionItems"></div>
        </div>
        <div className="sectionsRight">{rightItem}</div>
      </div>
      <div className="sectionItems"></div>
    </div>
  );
};

export default Sections;

// <div className="sectiondes">
