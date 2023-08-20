import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};

export default Header;
