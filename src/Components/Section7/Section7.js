import React from "react";
import Sections from "../Sections/Sections";

import Section7Right from "./section7Right";
import "./Section7.css";
import { Section8 } from "../Section8/Section8";

const Section7 = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        height: "fit-content",
        zIndex: "-99",
        transform: "skewY(-10deg)",
        top: "-16rem",
        background: "white",
      }}
    >
      <div
        style={{
          transform: "skewY(10deg)",
          padding: "20rem 0 4rem 0",
          // background: "white",
          zIndex: "-99",
        }}
      >
        <Sections
          Secheadings="Ready to get started?"
          des="Explore Stripe Payments, or create an account instantly and start accepting payments. You can also contact us to design a custom package for your business."
          btnText={"Watch now"}
          secondaryBtn={"Contact Sales"}
          Color={"blue"}
          textColor="white"
          topicColor="blue"
          fontColor="black"
          rightItem={<Section7Right />}
        />
      </div>
      <div className="skewDiv">
        <div className="skewDivLeft"></div>
        <div className="skewDivRight"></div>
      </div>
    </div>
  );
};

export default Section7;
