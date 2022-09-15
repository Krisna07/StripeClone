import React from "react";
import { FaAccusoft, FaShopify } from "react-icons/fa";
import ListDes from "../ListDes/ListDes";

const Section7Right = () => {
  const section7items = [
    {
      icon: <FaAccusoft />,

      heading: "Alawys know what you pay",
      des: "Integrated per-transaction pricing with no hidden fees",
      btn: "Pricing details ",
      btnTextcolor: "purple",
    },
    {
      icon: <FaShopify />,
      heading: "Start your integration",
      des: "Get up and running with Stripe in as little as 10 minutes.",
      btn: "API reference",
      btnTextcolor: "purple",
    },
  ];
  return <ListDes sectionItems={section7items} />;
};

export default Section7Right;
