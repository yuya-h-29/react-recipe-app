import React from "react";

// import css
import "../css/Navbar.css";

//import images
import logo from "../images/my-kitchen.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo-image" src={logo} alt="" />
      <ul className="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">My recipes</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
