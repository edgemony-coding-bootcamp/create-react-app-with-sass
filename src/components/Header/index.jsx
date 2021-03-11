import React from "react";
import "./styles.css";
import Logo from "../Logo";
import sassLogo from "../../assets/images/sass.svg";

const Header = ({ showTitle }) => (
  <header className="Header">
    <div className="Header-content">
      <Logo />
      {showTitle && (
        <div className="Header-title">
          <h1>Create React App with</h1>
          <img src={sassLogo} alt="Sass" />
        </div>
      )}
    </div>
  </header>
);

export default Header;
