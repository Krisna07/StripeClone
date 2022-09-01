import React, { useState } from "react";
import warbyGlasss from "../../Files/warbyparker.png";
import {
  FaCross,
  FaApplePay,
  FaArrowRight,
  FaChevronRight,
  FaCcVisa,
  FaPersonBooth,
  FaDotCircle,
  FaRegDotCircle,
} from "react-icons/fa";
import "./Shopping.css";
import { IoClose } from "react-icons/io5";
import GlosserItems from "./GlosserItems";
import { SiFoursquarecityguide, SiVisa } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import Payanimation from "./minipages/Payanimation";
import "./werby.css";

const Warby = () => {
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
      des: ["LACHLAN BROWN", "25 OCEAN STREET", "NSW 2000", "AUSTRALIA"],
      icon: <FaChevronRight />,
    },

    {
      title: "CONTACT",
      des: ["EMAIL@EMAIL.COM", "+61 02555166177"],
      icon: <FaChevronRight />,
    },
    {
      title: "",
      des: ["Pay Total"],
      icon: "A$255.00",
    },
  ];
  return (
    <div className="screenItem">
      <div className="payHeading" style={{ fontStyle: "normal" }}>
        <h4 style={{ fontWeight: "500" }}>WARBY PARKER</h4>
        <img className="titleImage" src={warbyGlasss} alt="" srcset="" />
        <div className="headingDes">
          <p style={{ fontWeight: "700" }}>Wilkie</p>
          <p>Purely Functional</p>
          <div className="dots">
            {[...Array(4)].map((x, i) => (
              <div className="dot" key={i}>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          background: `black`,
          width: "90%",
          height: "40px",
          textAlign: "center",
          borderRadius: "8px",
          color: "white",
        }}
      >
        <FaApplePay style={{ fontSize: "50px" }} />
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
      <Payanimation GlosserPayment={glosserObject} />
    </div>
  );
};

export default Warby;
