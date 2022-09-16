import React, { useState } from "react";
import {
  FaCross,
  FaApplePay,
  FaArrowRight,
  FaChevronRight,
  FaCcVisa,
  FaPersonBooth,
} from "react-icons/fa";
import { SiFoursquarecityguide, SiVisa } from "react-icons/si";
import { ReactComponent as FaceID } from "../../../Files/faceID.svg";
import { TiTick } from "react-icons/ti";
const Payanimation = ({ GlosserPayment }) => {
  const [change, setChange] = useState(true);
  setTimeout(() => {
    setChange(!change);
  }, 4000);
  return (
    <div className="paymentConfirm">
      <div className="paymentDes">
        <div className="paymentHeading">
          <span>
            <FaApplePay />
          </span>
          <span>Cancel</span>
        </div>
        {GlosserPayment.map((items, i) => {
          return (
            <div key={i} className="paymentDetails">
              <div>{items.title}</div>
              <div>
                {items.des.map((des) => {
                  return <p>{des}</p>;
                })}
              </div>
              <div>{items.icon}</div>
            </div>
          );
        })}
        <div className="faceVerify">
          {change ? (
            <div>
              <FaceID
                style={{
                  width: "40px",
                }}
              />
            </div>
          ) : (
            <div className="tick">
              <TiTick className="titick" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payanimation;
