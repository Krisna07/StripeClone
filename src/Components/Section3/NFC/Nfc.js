import React from "react";
import "./Nfc.css";
import { SiContactlesspayment } from "react-icons/si";
import { FaApplePay, FaGooglePay } from "react-icons/fa";
import { BiUpArrow } from "react-icons/bi";

const Nfc = () => {
  const nums = [...Array(15)];
  console.log(nums);
  return (
    <div className="nfcContainer">
      <div className="nfcFull">
        <div className="phoneContainer">
          <div className="displayContainer">
            <div className="display">
              <div className="topAnimation">
                <div className="blurone"></div>
                <BiUpArrow className="animatingArrow" />
              </div>
              <div className="card">
                <div></div>
              </div>
              <div className="logos">
                <SiContactlesspayment />
                <FaApplePay />
                <FaGooglePay />
              </div>
            </div>
          </div>
          <div className="phoneBtns">
            {nums.map((num) => (
              <div className="nums"></div>
            ))}
          </div>
        </div>
        <div className="bottomExtra">
          <BiUpArrow />
        </div>
      </div>
    </div>
  );
};

export default Nfc;
