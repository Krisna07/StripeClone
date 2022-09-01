import React from "react";
import "./Section6.css";

const Section6 = () => {
  const section6Items = [
    {
      topic: "250M+",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem?",
    },
    {
      topic: "90%",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem?",
    },
    {
      topic: "135+",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem?",
    },
    {
      topic: "35+",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem?",
    },
  ];
  return (
    <div
      className="section4Container"
      style={{
        transform: "skew(0)",
        flexDirection: "column",

        zIndex: "1",
      }}
    >
      <div
        className="skewBackground"
        style={{
          height: "900px",
          width: "100px",
          position: "absolute",
          zIndex: "99",
          top: "-20rem",
          background: "red;",
          transform: "skewY(10deg)",
        }}
      ></div>
      <div
        className="section4Contents"
        style={{
          gridTemplateColumns: "auto",
          transform: "skew(0)",
          position: "relative",
        }}
      >
        <div className="section5des">
          <h4>Global Scale</h4>
          <h2 style={{ fontSize: "40px" }}>
            The backbone for internet business
          </h2>
          <span color="white">
            For ambitious companies around the world, Stripe makes moving money
            as simple, borderless, and programmable as the rest of the internet.
            Our teams are based in dozens of offices around the world and we
            process hundreds of billions of dollars each year for startups to
            <span style={{ color: "skyblue" }}> large enterprises</span>.
          </span>
        </div>
        <div className="section5Items">
          {section6Items.map((items) => (
            <div
              className="miniTools"
              key={items.icons}
              style={{ width: "90%" }}
            >
              <h2
                style={{
                  borderLeft: "2px solid skyblue",
                  padding: "0 1rem ",
                  position: "relative",
                  left: "-1rem",
                }}
              >
                {items.topic}
              </h2>

              <p>{items.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
