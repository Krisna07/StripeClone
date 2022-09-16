import React from "react";
import Sections from "../Sections/Sections";

import Section7Right from "./section7Right";
import "./Section7.css";

const Section7 = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        background: "white",

        zIndex: "-99",
        padding: "4rem 0 8rem 0 ",
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
  );
};

export default Section7;
