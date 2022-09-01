import React from "react";
import HoverBtn from "./HoverBtn";

const ResueableContents = ({
  topics,
  headings,
  des,
  btnText,
  Color,
  textColor,
}) => {
  return (
    <div className="section5Container">
      <div className="section5Contents">
        <div className="section5des">
          <h4>{topics}</h4>
          <h2 style={{ color: "black", fontSize: "40px" }}>{headings}</h2>
          <p style={{ color: "black" }}>{des}</p>
          <HoverBtn text={btnText} color={Color} textColor={textColor} />
        </div>
        <div className="section5Items"></div>
      </div>
    </div>
  );
};

export default ResueableContents;
