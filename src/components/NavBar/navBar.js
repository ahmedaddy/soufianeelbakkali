import React from "react";
import "./navBar.css";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

import logo from "../../Assets/logo.png";

const NavBar = () => {
  return (
    <nav className="container">
      <div className="links--logo">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="Home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="search-market-login">
        <FaSearch />
        <TiShoppingCart />
        <div className="login">
          <a href="/login">LOGIN</a>
          <FaArrowRight />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
