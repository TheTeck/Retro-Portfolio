import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import './Nav.css'

export default function Nav () {

    const [menuActive, setMenuActive] = useState(false)

    function toggleMenu () {
        setMenuActive(!menuActive)
    }

    return (
        <>
            <div onClick={toggleMenu} id="menu-button">Menu</div>
            
            <div id="nav-container">
                <div id="nav" className={menuActive ? "nav-exposed" : "nav-hidden"} >
                    <a href="#about-scene">About Me</a>
                    <a href="#skills-scene">Technical Skills</a>
                    <a href="#">Projects</a>
                    <a href="#">Resume</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            
        </>
    )
}