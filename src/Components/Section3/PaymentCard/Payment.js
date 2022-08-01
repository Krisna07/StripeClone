import React, { useState } from "react";

import { FaCircle, FaCreditCard, FaSlack } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { ReactComponent as Slack } from "../../Files/SVGS/slackLogo.svg";
import { ReactComponent as Udacity } from "../../Files/SVGS/UdacityLogo.svg";
import { ReactComponent as OneMedical } from "../../Files/SVGS/OneMedical.svg";

import "./Payment.css";

const Payment = () => {
  const [payment, setPayment] = useState(0);
  const paymentCompany = [
    "Invoice from Slack",
    "Invoice from Udacity",
    "Invoice from Onemedical",
  ];
  const companyIcons = [
    <Slack className="paymentIcons" />,
    <Udacity className="paymentIcons" />,
    <OneMedical className="paymentIcons" />,
  ];
  const colors = ["#62206a", "#04b3e4", "#015551"];
  if (payment >= 3) {
    setPayment(0);
  }
  setTimeout(() => {
    setPayment(payment + 1);
  }, 5000);

  console.log(payment);
  return (
    <div className="paymentBox">
      <div
        className="halfbackground"
        style={{
          background: `${colors[payment]}`,
          transition: "all 300ms ease-in-out",
        }}
      ></div>
      <div className="fromCard">
        <div className="PformTop">
          <span className="circleCenter">
            <span>{companyIcons[payment]}</span>
          </span>
          <div className="paymentTopics">
            <span
              style={{ fontSize: "16px", fontWeight: "600" }}
              className="paymentCompany"
            >
              {paymentCompany[payment]}
            </span>
            <span>Billed to Jenny Rosen</span>
          </div>
        </div>
        <div className="pformBottom">
          <div className="textDes">A$199 due sep 1, 2020</div>
          <div className="bottomDetails">
            <div className="cardBank">
              <div
                className="inputFields"
                style={{
                  borderColor: `${colors[payment]}`,
                  color: `${colors[payment]}`,
                  border: "2px solid  ",
                }}
              >
                <FaCreditCard /> Card
              </div>
              <div className="inputFields">
                <AiFillBank /> Bank
              </div>
            </div>
            <div className=" cardDetails">
              <span className="cardNum">
                <FaCreditCard /> Card number
              </span>
              <span className="cardExp">
                <span>MM/YY</span>
                <span>CVC</span>
              </span>
            </div>
            <div
              className="paymentBtn"
              style={{ background: `${colors[payment]}`, color: "white" }}
            >
              Pay invoice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
