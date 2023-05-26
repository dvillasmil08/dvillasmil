import React from "react";
import "./Navbar.css";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

const Navbar = (prop) => {
    const { active } = props;

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className={active === "home" ? "nav-item active" : "nav-item"}>
          <Link to="/">Home</Link>
        </li>

        <li className={active === "home" ? "nav-item active" : "nav-item"}>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/hobbies" className="nav-link">
            Hobbies
          </Link>
        </li>
        <li className="nav-item">
          <Contact />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
