import React from "react";
import "./Nav.css";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";
import HoverBtn from "../HoverBtn";

const Nav = () => {
  const menuItems = [
    "Products",
    "Solutions",
    "Developers",
    "Company",
    "Pricing",
  ];
  return (
    <div className="navBar">
      <div className="heading">
        <h1>stripe</h1>
      </div>
      <div className="menus">
        <ul className="menuList">
          {menuItems.map((items) => {
            return (
              <li key={items} className="menuItems">
                {items}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="btnContainer hoverItem">
        <HoverBtn text={"Sign in"} size={"12px"} padding={"4px 8px"} />
      </div>
    </div>
  );
};

export default Nav;
