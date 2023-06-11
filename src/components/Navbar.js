import { db, app, functions } from "./firebase";
import { getFunctions, httpsCallable } from "firebase/functions";
//import { response } from "express";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/Logo.png";
import React, { useState } from "react";
import { resolveComponentProps } from "@mui/base";
import git_logo from "../assets/GitHub-Mark-32px.png";
import {
  doc,
  onSnapshot,
} from "firebase/firestore";

export default function Navbar() {
  const [count, setCount] = React.useState('');

  const unsub = onSnapshot(doc(db, "viewCount", "Count"), (doc) => {
    setCount(doc.get("View Count"));
  });

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
        <div className="countBox">
          <p className="pizzaCount">NNT Solution</p>
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
}
