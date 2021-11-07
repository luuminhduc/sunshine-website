import React from "react";
import Facebook from "../../assets/images/icon-facebook.svg";
import Instagram from "../../assets/images/icon-instagram.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import Pinterest from "../../assets/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer>
      <div></div>
      <div className="list">
        <p>About</p>
        <p>Service</p>
        <p>Projects</p>
      </div>
      <div className="list-icons">
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
        <img src={Twitter} alt="" />
        <img src={Pinterest} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
