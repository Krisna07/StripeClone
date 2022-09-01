import React from "react";
import {
  FaAppleAlt,
  FaCcAmex,
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
  FaChevronDown,
} from "react-icons/fa";

import phoneHead from "../../../Files/phoneHead.jpg";
const Phone = () => {
  return (
    <div className="phoneImage">
      <div className="phoneHeading">
        <img src={phoneHead} alt="" />
        <p style={{ fontWeight: "bold" }}>Increment Magazine</p>
        <p style={{ opacity: "0.7" }}>A$14 per quarter</p>
      </div>
      <div className="payBtn">
        <FaAppleAlt /> Pay
      </div>
      <div className="payOption">
        <span className="line"></span>
        <p> Or pay with card</p>
      </div>
      <div className="phoneform">
        <div className="phonelabel">
          <label>Email</label>
          <div className="inputForm">
            <input type="text" placeholder="Email" />
          </div>
        </div>
        <div className="phonelabel">
          <label>Card Information</label>

          <div className="cardInfo">
            <div
              style={{
                borderBottom: "1px solid rgba(153, 153, 153, 0.61)",
                display: "flex",
              }}
            >
              <input
                type="text"
                placeholder="Number"
                style={{
                  width: "60%",
                }}
              />
              <div className="cardTypes">
                <span>
                  <FaCcAmex className="amex" />
                </span>
                <span>
                  <FaCcMastercard className="masterCard" />
                </span>
                <span>
                  <FaCcVisa className="visa" />
                </span>
                <span>
                  <FaCcDiscover className="discover" />
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                placeholder="MM/YY"
                style={{
                  width: "50%",
                  borderRight: "1px solid rgba(153, 153, 153, 0.61)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "14px",
                }}
              >
                <input
                  type="text"
                  placeholder="CVC"
                  style={{
                    width: "50%",
                  }}
                />
                <span>
                  <FaCcMastercard style={{ padding: "8px" }} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="phonelabel">
          <label>Country or region</label>
          <div className="inputForm">
            <div
              style={{
                borderBottom: "1px solid rgba(153, 153, 153, 0.5)",
              }}
            >
              <input type="text" placeholder="United States" />
              <span>
                <FaChevronDown style={{ opacity: "0.5" }} />
              </span>
            </div>
            <input type="text" placeholder="ZIP" />
          </div>
        </div>
      </div>
      <div className="payBtn">Pay</div>
    </div>
  );
};

export default Phone;
