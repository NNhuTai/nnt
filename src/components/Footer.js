import React from "react";

import git_logo from "../assets/GitHub-Mark-32px.png";

import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../App.css";
const Footer = () => {
return (
	<nav className="navbar">
      <div className="navTop">
        <div className="navIcon">
          <Link to="/">
            <img
              className="image-link"
              src={logo}
              alt="NNT Solution Logo"
            ></img>
          </Link>
        </div>

        <div style={{ float: "right" }}>
          <a href="https://www.facebook.com/Banghetukeinox" target="_blank">
            <img className="git-link" src={git_logo} alt="Github Logo"></img>
          </a>
        </div>
      </div>
      <div className="nav-flex">
        <Link to="/pizzas" className="navLink">
          {" "}
			Sản Phẩm
        </Link>
        <Link to="/map" className="navLink">
          {" "}
          Vi Trí
        </Link>
        <Link to="/aboutus" className="navLink">
          {" "}
          Thông Tin
        </Link>
      </div>
    </nav>
);
};
export default Footer;
