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
                    <a href="#about-me">About Me</a>
                    <a href="#technical-skills">Technical Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#resume">Resume</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            
        </>
    )
}