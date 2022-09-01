import React from "react";
import HoverBtn from "../HoverBtn";
import "./Section4.css";
import StripeImage from "../Files/stripeText.jpg";
import { RiSettings5Fill } from "react-icons/ri";

const Section4 = () => {
  return (
    <div className="section4Container">
      <div className="section4Contents">
        <div className="firstContainer">
          <p>Designed For Developers</p>
          <h1>The world's most powerful and easy-to-use APIs</h1>
          <div className="paraSec">
            <p>
              We agonize over the right abstractions so your teams don’t need to
              stitch together disparate systems or spend months integrating
              payments functionality.
            </p>
            <HoverBtn
              text={"Read the docs"}
              color="#00d4ff"
              padding="5px 10px"
              textColor={"rgb(19, 19, 100)"}
            />
          </div>
          <div className="toolsPrebuilt">
            {[...Array(2)].map((x, i) => (
              <div className="miniTools" key={i}>
                <div>
                  <div className="codeCard">
                    <span
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        padding: "0 5px",
                      }}
                    >
                      {">_"}
                    </span>
                  </div>
                  <RiSettings5Fill
                    style={{
                      fontSize: "40px",
                      padding: "20px 30px",
                      color: "#7A73FF",
                    }}
                  />
                </div>
                <h4
                  style={{
                    borderLeft: "2px solid white",
                    padding: "0 1rem ",
                    position: "relative",
                    left: "-1rem",
                  }}
                >
                  Tools for every stack
                </h4>

                <p>
                  We offer client and server libraries in everything from React
                  and PHP to .NET and iOS.
                </p>
                <HoverBtn
                  text={"See libraries"}
                  padding={"0px 0px"}
                  textColor={"#00d4ff"}
                />
                <div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="secondContainer">
          <img src={StripeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section4;