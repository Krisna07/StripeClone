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
              <div className="imageCircle">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVCmC_4ackJ10-W1R_DtFo--ZulKzjDjoWA&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="imageCircle">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVCmC_4ackJ10-W1R_DtFo--ZulKzjDjoWA&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
            <div className="bottomDes">
              <h4 className="keyNote">Keynote</h4>
              <h4 className="keyDes">
                Building for the next era of the internet economy
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripeSessions;
