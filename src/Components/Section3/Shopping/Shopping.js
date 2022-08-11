import React, { useState } from "react";
import {
  FaCross,
  FaApplePay,
  FaArrowRight,
  FaChevronRight,
  FaCcVisa,
  FaPersonBooth,
} from "react-icons/fa";
import "./Shopping.css";
import { IoClose } from "react-icons/io5";
import GlosserItems from "./GlosserItems";
import { SiFoursquarecityguide, SiVisa } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import { ReactComponent as FaceID } from "../../Files/faceID.svg";
const Shopping = () => {
  const [change, setChange] = useState(true);
  setTimeout(() => {
    setChange(!change);
  }, 2000);

  const glosserObject = [
    {
      title: (
        <SiVisa
          style={{
            background: "white",
            color: "blue",
            borderRadius: "4px",
            fontSize: "30px",
            display: "flex",
            padding: "0 4px",
            boxShadow: "rgba(0, 0, 0, 0.1) 2px 2px 2px 2px",
          }}
        />
      ),
      des: [
        "COMMONWEALTH BANK OF AUSTRALIA(****199)",
        "25 OCEAN STREET SYDNEY NSW",
      ],
      icon: <FaChevronRight />,
    },
    {
      title: "BILLING",
      des: ["119 MILITARY ROAD", "GUILDFORD", "NSW", "2161"],
      icon: <FaChevronRight />,
    },
    {
      title: "METHOD",
      des: ["3- DAY", "3-4 BBUSINESS DAYS"],
      icon: <FaChevronRight />,
    },
    {
      title: "CONTACT",
      des: ["EMAIL@EMAIL.COM", "+61 02555166177"],
      icon: <FaChevronRight />,
    },
    {
      title: "Pay Total",
      des: [],
      icon: "A$255.00",
    },
  ];

  return (
    <div className="shopingPhoneContainer">
      <div className="phoneScreen">
        <div className="heading">
          <h1>Glosser.</h1>
        </div>
        <div className="prodDes">
          <div className="cartText">
            <div>
              <IoClose style={{ paddingRight: "10px" }} /> Your cart
            </div>
            <div> 2 items</div>
          </div>
        </div>
        <div className="products">
          <GlosserItems />
          <GlosserItems />
        </div>
        <div className="btns">
          <div>
            <span>Estimated Total</span>
            <span>$60</span>
          </div>
          <div className="buttons">
            <span style={{ background: "midnightblue" }}>
              <FaApplePay style={{ color: "white" }} />
            </span>
            <span>CHECKOUT</span>
          </div>
        </div>
        <div className="paymentConfirm">
          <div className="paymentDes">
            <div className="paymentHeading">
              <span>
                <FaApplePay />
              </span>
              <span>Cancel</span>
            </div>
            {glosserObject.map((items) => {
              return (
                <div key={items.title} className="paymentDetails">
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
                <span>
                  <FaceID
                    style={{
                      width: "40px",
                    }}
                  />
                </span>
              ) : (
                <span className="tick">
                  <TiTick className="titick" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
