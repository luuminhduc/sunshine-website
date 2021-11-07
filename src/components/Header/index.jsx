import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import BarIcon from "../../assets/images/icon-hamburger.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header>
      <div className="header-container">
        <img src={Logo} alt="" />
        <nav className={`${showNav ? "active" : ""}`}>
          <p>About</p>
          <p>Project</p>
          <p>Services</p>
          <button>Contact</button>
        </nav>
        <img
          onClick={() => setShowNav(!showNav)}
          className="menu-bar"
          src={BarIcon}
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
