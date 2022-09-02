import React from "react";
import "./StripeSession.css";

const StripeSessions = () => {
  return (
    <div className="session">
      <div className="sessionContainer">
        <div className="topContainer"></div>
        <div className="topItem">
          <h2>Strip Session</h2>
        </div>
        <div className="bottomContainer">
          <div className="bottomItems">
            <div className="itemsDes">
              <div className="imageCircle"></div>
              <div className="imageCircle"></div>
            </div>
            <div>
              <h4>Keynote</h4>{" "}
              <h4>Building for the next era of the internet economy</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripeSessions;
