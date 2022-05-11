import React, { useContext, useState } from "react";
// import { ThemeContext } from "../../context/Theme";
import { contact, projects, skills } from "../../portfolio";
import './Navbar.css'


const Navbar = () => {
    // const [{ themeName, toggleTheme }] = useContext(ThemeContext)
    const [showNavlist, setShowNavList] = useState(false)
    const toggleNavList = () => setShowNavList(!showNavlist)


    return(
        <nav className='center nav'>
            <ul className='nav__list'
                style={{ display: showNavlist ? 'flex' : null}}
            >
                {projects.length ?(
                    <li className='nav__list-item'>
                        <a href='#projects'
                        onClick={toggleNavList}
                        className='link link--navd'
                        >
                            Projects
                        </a>
                    </li>
                ) : null}

                {skills.length ? (
                    <li className='nav__list-item'>
                        <a
                        href='#skills'
                        onClick={toggleNavList}
                        className='link link--nav'
                        >
                            Skills
                        </a>
                    </li>
                ) : null}

                {contact.email ? (
                <li className='nav__list-item'>
                    <a
                    href='#contact'
                    onClick={toggleNavList}
                    className='link link--nav'
                    >
                        Contact
                    </a>
                </li>
                ) : null} 
            </ul>
{/* 
            <button
                type='button'
                onClick={toggleTheme}
                className='btn btn--icon nav__theme'
                aria-label='toggle theme'
            >
                {themeName === 'dark'}

            </button> */}



        </nav>
    )
}

export default Navbar