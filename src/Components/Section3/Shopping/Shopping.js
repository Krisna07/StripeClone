import React, { useState } from "react";
import Glosser from "./Glosser";
import Warby from "./Warby";

const Shopping = () => {
  const [switchPages, setswitchPage] = useState(0);
  if (switchPages == 2) {
    setswitchPage(0);
  }
  setTimeout(() => {
    setswitchPage(switchPages + 1);
  }, 8000);

  return (
    <div className="shopItems">
      <div className="shopingPhoneContainer">
        <div className="phoneScreen">
          {switchPages == 1 ? <Glosser /> : <Warby />}
        </div>
      </div>
    </div>
  );
};

export default Shopping;
