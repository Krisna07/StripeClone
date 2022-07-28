import React from "react";
import { FaGoogle, FaSalesforce } from "react-icons/fa";
import { ReactComponent as Google } from "../Files/SVGS/google.svg";
import { ReactComponent as Salesforce } from "../Files/SVGS/salesforce.svg";
import { ReactComponent as Slack } from "../Files/SVGS/slack.svg";
import { ReactComponent as Zoom } from "../Files/SVGS/zoom.svg";
import { ReactComponent as Shopify } from "../Files/SVGS/shopify.svg";

import { ReactComponent as Xero } from "../Files/SVGS/xero.svg";
import { ReactComponent as Amazon } from "../Files/SVGS/Amazon.svg";

import { ReactComponent as AirTasker } from "../Files/SVGS/airtasker.svg";

import "./Sponsers.css";

const Sponsers = () => {
  return (
    <div className="sponsers-icons">
      <AirTasker className="svgIcon" />
      <Salesforce className="svgIcon" />

      <Slack className="svgIcon" />

      <Amazon className="svgIcon" />

      <Shopify className="svgIcon" />

      <Google className="svgIcon" />
      <Xero className="svgIcon" />

      <Zoom className="svgIcon" />
    </div>
  );
};

export default Sponsers;
