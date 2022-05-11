import React, { useState } from "react";
import { projects, skills } from "../../portfolio";
import './Navbar.css'


const Navbar = () => {
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
                ): null}

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
                ):null}


                <li>
                    <a>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar