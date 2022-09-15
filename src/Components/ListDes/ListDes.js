import React from "react";
import HoverBtn from "../HoverBtn";
import "./ListDes.css";

const ListDes = (sectionItems) => {
  const listItems = sectionItems.sectionItems;

  return (
    <div className="toolsPrebuilt">
      {listItems.map((items, i) => (
        <div className="miniTools" key={i}>
          <div className="listIcons">{items.icon}</div>
          <p
            style={{
              borderLeft: "1px solid black",
              paddingLeft: "1rem ",
              height: "fit-Content",
              position: "relative",
              left: "-1rem",
              fontWeight: "600",
            }}
          >
            {items.heading}
          </p>

          <p>{items.des}</p>
          <HoverBtn
            text={items.btn}
            padding={"0"}
            textColor={items.btnTextcolor}
          />
        </div>
      ))}
    </div>
  );
};

export default ListDes;
