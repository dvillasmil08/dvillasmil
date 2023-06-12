import React from "react";
// import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-links">
        <ul className="footer-nav-links-list">
          <li className="footer-nav-link-item">
            <Link to="/">Home</Link>
          </li>

          <li className="footer-nav-link-item">
            <Link to="about">About</Link>
          </li>

          <li className="footer-nav-link-item">
            <Link to="projects">Projects</Link>
          </li>

          <li className="footer-nav-link-item">
            <Link to="hobbies">Hobbies</Link>
          </li>

          <li className="footer-nav-link-item">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="footer-credits">
        <div className="footer-credits-text">
          <p>{currentYear} DanielVillasmil.dev. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
