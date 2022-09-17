import React from "react";
import HoverBtn from "../HoverBtn";
import ListDes from "../ListDes/ListDes";
import Sections from "../Sections/Sections";
import "./Section6.css";

const Section6 = () => {
  const section6Items = [
    {
      topic: "250M+",
      des: "API requests per day. peaking at 13,000 request a second.",
    },
    {
      topic: "90%",
      des: "of U.S. adults have bought from business using stripe.",
    },
    {
      topic: "135+",
      des: "Currencies and payment methods supported",
    },
    {
      topic: "35+",
      des: "contries with local acquiring optimizing acceptance rates.",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        background: "#0a2540",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        zIndex: "-1",
        transform: "skewY(-10deg)",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "relative",
          background: "#0a2540",
          padding: "10rem 0",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          transform: " skewY(10deg)",
          zIndex: "-1",
        }}
      >
        <Sections
          topics={"Global Scale"}
          headings={" The backbone for internet business"}
          des={
            <span color="white">
              For ambitious companies around the world, Stripe makes moving
              money as simple, borderless, and programmable as the rest of the
              internet. Our teams are based in dozens of offices around the
              world and we process hundreds of billions of dollars each year for
              startups to
              <span style={{ color: "skyblue" }}> large enterprises</span>.
            </span>
          }
          fontColor="white"
          Color="blue"
        />
        <div
          style={{
            width: "var(--Laptops)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            lineHeight: "150%",
          }}
        >
          {section6Items.map((items, i) => (
            <div className="miniTools" key={i}>
              <div className="listIcons">{items.icon}</div>
              <h2
                style={{
                  borderLeft: "1px solid blue",
                  paddingLeft: "1rem ",
                  height: "fit-Content",
                  position: "relative",
                  left: "-1rem",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {items.topic}
              </h2>

              <p style={{ opacity: "0.6", fontSize: "14px", width: "80%" }}>
                {items.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;

// <div
//         className="skewBackground"
//         style={{
//           height: "900px",
//           width: "100px",
//           position: "absolute",
//           zIndex: "99",

//           background: "red;",
//           transform: "skewY(10deg)",
//         }}
//       ></div>
//       <div
//         className="section4Contents"
//         style={{
//           gridTemplateColumns: "auto",
//           transform: "skew(0)",
//           position: "relative",
//         }}
//       >
//         <div className="section5des">
//           <h4>Global Scale</h4>
//           <h2 style={{ fontSize: "40px" }}>
//             The backbone for internet business
//           </h2>
//           <span color="white">
//             For ambitious companies around the world, Stripe makes moving money
//             as simple, borderless, and programmable as the rest of the internet.
//             Our teams are based in dozens of offices around the world and we
//             process hundreds of billions of dollars each year for startups to
//             <span style={{ color: "skyblue" }}> large enterprises</span>.
//           </span>
//         </div>
//         <div className="section5Items">
//           {section6Items.map((items) => (
//             <div
//               className="miniTools"
//               key={items.icons}
//               style={{ width: "90%" }}
//             >
//               <h2
//                 style={{
//                   borderLeft: "2px solid skyblue",
//                   padding: "0 1rem ",
//                   position: "relative",
//                   left: "-1rem",
//                 }}
//               >
//                 {items.topic}
//               </h2>

//               <p>{items.des}</p>
//             </div>
//           ))}
//         </div>
//       </div>
