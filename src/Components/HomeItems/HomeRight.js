import React from "react";
import HoverBtn from "../HoverBtn";

const HomeRight = () => {
  return (
    <div>
      <div className="homeRight">
        <div className="rightBtn">
          <div className="sessionContainer hoverItem">
            <span> Stripe Sessions 2022</span>
            <ul>
              <li>
                <HoverBtn text={"Watch now on demand"} size={"10px"} />
              </li>
            </ul>
          </div>
        </div>
        <div className="rightContent">
          <h1 className="heading">Payments infrastructure for the internet</h1>
          <p className="content1">
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe’s software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
          <div className="startContainer">
            <div className="startBtn">
              <HoverBtn
                text={"Start now"}
                color={"black"}
                textColor={"white"}
                size={"12px"}
                padding={"4px 8px"}
              />
            </div>
            <div className="ContactBtn ">
              <HoverBtn
                text={"Contact sales"}
                size={"12px"}
                padding={"4px 8px"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
