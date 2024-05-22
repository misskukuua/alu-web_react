import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
