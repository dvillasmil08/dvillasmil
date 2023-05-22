import React from "react";
import './Navbar.css'


const Navbar = () => { 
    
return (
    <nav className="navbar">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="#about" className="nav-link">
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a href="#skills" className="nav-link">
                    Projects
                </a>
            </li>
            <li className="nav-item">
                <a href="#projects" className="nav-link">
                    Hobbies
                </a>
            </li>
            <li className="nav-item">
                <a href="#contact" className="nav-link">
                    Contact
                </a>
            </li>
        </ul>
    </nav>
)
}

export default Navbar