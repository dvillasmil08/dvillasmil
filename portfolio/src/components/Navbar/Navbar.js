import React, { useState } from "react";
import { projects } from "../../portfolio";

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
                <li>
                    <a>
                        Skills
                    </a>
                </li>
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