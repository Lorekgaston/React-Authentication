import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <h3>Home</h3>
        </div>
      </Link>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__nav-option">
            <span>Log In</span>
          </div>
        </Link>
        <Link to="/signup">
          <div className="header__nav-option">
            <span>Sign In</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
