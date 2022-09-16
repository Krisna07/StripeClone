import React from "react";
import HoverBtn from "../HoverBtn";
import "./Section5.css";
import {
  RiPulseFill,
  RiSettings2Fill,
  RiSettings4Line,
  RiSettings5Fill,
} from "react-icons/ri";
import { FaPlay, FaSun } from "react-icons/fa";

const Section5 = () => {
  const section5Items = [
    {
      icons: <FaSun />,
      topic: "Close to the metal",
      des: (
        <p>
          From <span className="highligthed">direct integrations</span> with
          card networks and banks to checkout flows in the browser, we operate
          on and optimize at every level of the financial stack.
        </p>
      ),
    },
    {
      icons: <FaPlay />,
      topic: "Fastest-improving platform",
      des: (
        <p>
          We release <span className="highligthed">hundreds of features</span>{" "}
          with card networks and banks to checkout flows in the browser, we
          operate on and optimize at every level of the financial stack.
        </p>
      ),
    },
    {
      icons: <RiPulseFill />,
      topic: "Battle-tested reliability",
      des: (
        <p>
          Our systems operate with <span className="highligthed">99.99%+</span>{" "}
          and uptime and are highly scalable and redundant. Stripe is certified
          to the highest compliance standards.
        </p>
      ),
    },
    {
      icons: <RiSettings4Line />,
      topic: "Intelligent optimizations",
      des: (
        <p>
          Our machine learning models train on{" "}
          <span className="highligthed">billions</span> of data points and help
          increase revenue across conversion, fraud, revenue recovery, and more.
        </p>
      ),
    },
  ];
  return (
    <div className="section5Container">
      <div className="section5Contents">
        <div className="section5des">
          <h4>Why Stripe</h4>
          <h2 style={{ color: "black", fontSize: "40px" }}>
            A technology-first approach to payments and finance
          </h2>
        </div>
        <div className="section5Items">
          {section5Items.map((items, i) => (
            <div
              className="miniTools"
              key={i}
              style={{ width: "90%", color: "black" }}
            >
              <div
                style={{
                  fontSize: "40px",
                  padding: "20px 30px",
                  color: "#7A73FF",
                }}
              >
                {items.icons}
              </div>
              <h4
                style={{
                  borderLeft: "2px solid blue",
                  padding: "0 1rem ",
                  position: "relative",
                  left: "-1rem",
                }}
              >
                {items.topic}
              </h4>

              <p>{items.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
