import React from "react";
import "./Nfc.css";

const Nfc = () => {
  const nums = new Array(15);
  console.log(nums);
  return (
    <div className="nfcFull">
      <div className="displayContainer">
        <div className="display"></div>
      </div>
      <div className="phoneBtns">
        {nums.map((num) => {
          <div className="nums"></div>;
        })}
      </div>
    </div>
  );
};

export default Nfc;
