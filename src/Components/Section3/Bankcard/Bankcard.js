import React, { useState } from "react";
import { FaLemon, FaMailBulk } from "react-icons/fa";
import { SiPostmates } from "react-icons/si";

import "./bankcard.css";

const Bankcard = () => {
  const [index, setIndex] = useState(0);
  const bgColor = ["black", "orange", "#0acbcb"];
  if (index >= 3) {
    return setIndex(0);
  }
  setTimeout(() => setIndex(index + 1), 10000);

  const titles = ["Postmates", "Zestful", "Communify"];
  const CradImages = [
    <div className="lemoncard">
      <span className="circles"></span>
      <span className="circles"></span>
      <span className="circles"></span>
      <span className="circles"></span>
      <span className="circles"></span>

      <span className="largeCirles"></span>
    </div>,
    <FaLemon className="cardIcons lemon" />,
    <svg
      width="103"
      height="107"
      viewBox="0 0 103 107"
      class="CommutifyCardDesign__graphic"
    >
      <g fill="#FFF" fill-rule="evenodd" transform="translate(.024 .775)">
        <circle
          cx="10.2"
          cy="52.83"
          r="10.2"
          fill-opacity=".5"
          data-js-target-list="CommutifyCardDesign.graphicShapes"
          data-js-order="0"
          style={{ transformOrigin: "left center" }}
        ></circle>
        <circle
          cx="30.59"
          cy="30.59"
          r="10.2"
          fill-opacity=".5"
          data-js-target-list="CommutifyCardDesign.graphicShapes"
          data-js-order="1"
          style={{ transformOrigin: "left center" }}
        ></circle>
        <circle
          cx="30.59"
          cy="75.07"
          r="10.2"
          fill-opacity=".5"
          data-js-target-list="CommutifyCardDesign.graphicShapes"
          data-js-order="1"
          style={{ transformOrigin: "left center" }}
        ></circle>
        <circle
          cx="50.98"
          cy="10.2"
          r="10.2"
          fill-opacity=".5"
          data-js-target-list="CommutifyCardDesign.graphicShapes"
          data-js-order="2"
          style={{ transformOrigin: "left center" }}
        ></circle>
        <circle
          cx="50.98"
          cy="95.46"
          r="10.2"
          fill-opacity=".5"
          data-js-target-list="CommutifyCardDesign.graphicShapes"
          data-js-order="2"
          style={{ transformOrigin: "left center" }}
        ></circle>
        <path
          d="M71.37 20.39a10.2 10.2 0 0 1 0 20.39c-1.73 0-3 1.26-5.12 2.7-5.1 3.5-4.56 9.08-4.99 9.36.43.28-.1 5.87 5 9.35 2.11 1.46 3.38 2.71 5.1 2.71a10.2 10.2 0 1 1-10.19 10.2c0-1.9-.06-3.1-1.57-6.04-1.35-2.64-5.9-6.01-8.62-6.01-.03 0-.04-.01-.03-.02a10.2 10.2 0 0 1 .03-20.4h.2c2.75-.16 7.1-3.44 8.42-6.01 1.51-2.94 1.57-4.15 1.57-6.03a10.2 10.2 0 0 1 10.2-10.2z"
          data-js-target-list="CommutifyCardDesign.graphicShapes"
          data-js-order="3"
          style={{ transformOrigin: "left center" }}
        ></path>
        <circle
          cx="91.76"
          cy="52.83"
          r="10.2"
          fill-opacity=".5"
          data-js-target-list="CommutifyCardDesign.graphicShapes"
          data-js-order="4"
          style={{ transformOrigin: "left center" }}
        ></circle>
      </g>
    </svg>,
  ];
  const username = ["Jane Diaz", "Michela Ballew", "Thomas Degry"];
  return (
    <div
      className="bankcard"
      style={{
        background: `${bgColor[index]}`,
        color: `${index === 1 ? "black" : "white"}`,
      }}
    >
      <div className="cardHeading">
        <span>{titles[index]}</span>
      </div>
      <div className="cardImage">
        <svg
          width="51"
          height="46"
          viewBox="0 0 51 45"
          class="AnimatedCardGraphic__chip"
        >
          <defs>
            <linearGradient
              id="chip-gradient"
              y1="40%"
              y2="58%"
              data-js-target="AnimatedCardGraphic.chipGradient"
            >
              <stop offset="0%" stop-color="#FFF"></stop>
              <stop offset="18%" stop-color="#CFCFCF"></stop>
              <stop offset="50%" stop-color="#FAFCFF"></stop>
              <stop offset="68%" stop-color="#CFCFCF"></stop>
              <stop offset="100%" stop-color="#FFF"></stop>
            </linearGradient>
            <mask id="chip-mask">
              <path
                d="M12 36v9H7.7c-2.68 0-3.65-.28-4.63-.8A5.45 5.45 0 0 1 .8 41.93c-.52-.98-.8-1.95-.8-4.62V36h12zm21.07-6a7 7 0 0 0 4.68 5.63l.25.08V45H13v-9.29a7.01 7.01 0 0 0 4.89-5.45l.04-.26h15.14zM51 36v1.3c0 2.68-.28 3.65-.8 4.63a5.45 5.45 0 0 1-2.27 2.27c-.98.52-1.95.8-4.62.8H39v-9h12zm0-13v12H40a6 6 0 0 1-6-6v-6h17zm-34 0v6a6 6 0 0 1-5.78 6H0V23h17zm16-7v13H18V16h15zm18-6v12H34v-6a6 6 0 0 1 5.78-6H51zm-40 0a6 6 0 0 1 6 6v6H0V10h11zM38 0v9.29A7 7 0 0 0 33.07 15H17.93A7 7 0 0 0 13 9.29V0h25zm5.3 0c2.68 0 3.65.28 4.63.8a5.45 5.45 0 0 1 2.27 2.27c.52.98.8 1.95.8 4.62V9H39V0h4.3zM12 0v9H0V7.7c0-2.68.28-3.65.8-4.63A5.45 5.45 0 0 1 3.07.8C4.05.28 5.02 0 7.69 0H12z"
                fill="#fff"
              ></path>
            </mask>
          </defs>

          <rect x="0" y="0" width="51" height="45" fill="#828396" rx="6"></rect>
          <rect
            x="-51"
            y="-45"
            width="102"
            height="98"
            fill="url(#chip-gradient)"
            mask="url(#chip-mask)"
            data-js-target="AnimatedCardGraphic.chip"
          ></rect>
        </svg>
        {CradImages[index]}
        <div></div>
      </div>
      <div className="cardFooter">
        <div className="username">{username[index]}</div>
        <div className="cardtype">
          <svg
            class="AnimatedCardGraphic__visa"
            width="84"
            height="27"
            viewBox="0 0 84 27"
          >
            <path
              fill="#fff"
              d="M42 1l-5.43 26H30l5.43-26H42zm28 17h6L73.8 8 70 18zm7.81 9l-.8-3.88h-8.59L67.02 27H60L70.04 2.9A3.04 3.04 0 0 1 72.89 1h5.7L84 27h-6.19zm-17.09-8.94C60.7 23.5 55.95 27 48.7 27c-3.1-.03-6.07-.66-7.69-1.39l1.25-5.72c1.61.73 3.63 1.7 7.1 1.65 1.99-.03 4.12-.8 4.14-2.56.01-1.14-.9-1.96-3.59-3.24-2.61-1.25-6.09-3.35-6.05-7.1C43.9 3.53 48.7 0 55.53 0c2.67 0 4.8.57 6.47 1.15L60.79 6.7a13.29 13.29 0 0 0-6.82-1.16c-2 .25-2.9 1.25-2.93 2.18-.07 3.08 9.71 3.46 9.68 10.35zM32 1L20.96 27h-7.2L8.35 6.25C8 4.97 7.72 4.51 6.72 3.97A28.75 28.75 0 0 0 0 1.75L.16 1h11.59c1.48 0 2.8.97 3.14 2.65l2.87 15.05L24.85 1H32z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Bankcard;
