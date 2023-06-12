import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
	const { active } = props;

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-background">
          <ul className="nav-list">
            <li className={active === "home" ? "nav-item active" : "nav-item"}>
              <Link to="/">Home</Link>
            </li>

            <li className={active === "about" ? "nav-item active" : "nav-item"}>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li
              className={active === "projects" ? "nav-item active" : "nav-item"}
            >
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>

            <li
              className={active === "hobbies" ? "nav-item active" : "nav-item"}
            >
              <Link to="/hobbies" className="nav-link">
                Hobbies
              </Link>
            </li>
            <li
              className={active === "contact" ? "nav-item active" : "nav-item"}
            >
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
