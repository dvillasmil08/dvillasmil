import React from "react";
import './Navbar.css'


const Navbar = () => { 
    
return (
    <nav className="navbar">
        <button className="navbar__item navbar__theme-toggle">
            <i className="fas fa-sun">light</i>
            <i className="fas fa-moon">dark</i>
        </button>
        <button className="navbar__item navbar__hamburger">toggle</button>
        {/* <div className="navbar__title navbar__item">Daniel Villasmil</div> */}
        <div className="navbar__item navbar__list">
            <div className="navbar__item navbar__link">Projects</div>
            <div className="navbar__item navbar__link">Skills</div>
            <div className="navbar__item navbar__link">Contact</div>
        </div>
    </nav>
)
}

export default Navbar