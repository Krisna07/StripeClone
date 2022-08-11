import React from "react";
import image1 from "../../Files/glosser1.png";

const GlosserItems = () => {
  const items = {
    width: "48%",
    display: "flex",
    flexDirection: "column",

    background: "#F8F8FF",
  };
  return (
    <div className="itemsHeading" style={items}>
      <p>1xinvisble Lorem</p>
      <span> A$24</span>
      <div>
        <img src={image1} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div
        className="Itemfooter"
        style={{
          width: "100%",
          display: "flex",
          alignItens: "center",
        }}
      >
        <span
          style={{
            border: "2px solid white",
            width: "50%",
            textAlign: "center",
          }}
        >
          Edit
        </span>
        <span
          style={{
            border: "2px solid white",
            width: "50%",
            textAlign: "center",
          }}
        >
          Remove
        </span>
      </div>
    </div>
  );
};

export default GlosserItems;
