import React from "react";
import HoverBtn from "../HoverBtn";
import Bankcard from "./Bankcard/Bankcard";
import Fraud from "./Fraud/Fraud";
import Nfc from "./NFC/Nfc";
import Payment from "./PaymentCard/Payment";
import "./section3.css";
import Shopping from "./Shopping/Shopping";

const Section3 = () => {
  return (
    <div className="section3">
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "fit-content",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="section3Container">
          <span className="sectionTopic" style={{ color: "#6a73fe" }}>
            Unified Platform
          </span>
          <span className="sectionHeading">
            A fully integrated suite of payments products
          </span>
          <div className="sec3Des">
            <p>
              We bring together everything that’s required to build websites and
              apps that accept payments and send payouts globally. Stripe’s
              products power payments{" "}
              <span className="text-blue">
                for online and in-person retailers, subscriptions businesses,
                software platforms and marketplaces
              </span>
              , and everything in between.
            </p>
            <p>
              We also help companies{" "}
              <span className="text-blue">
                beat fraud, send invoices, issue virtual and physical cards, get
                financing, manage business spend,
              </span>{" "}
              and much more.
            </p>
          </div>
          <HoverBtn
            text={"Start with payement"}
            color={"#6a73fe"}
            textColor={"white"}
            padding={".6rem "}
            hover={"black"}
          />
        </div>
        <div className="cardAnimations">
          <Bankcard />
          <Payment />
          <Nfc />
          <Shopping />
          <Fraud />
        </div>
      </div>
    </div>
  );
};

export default Section3;
