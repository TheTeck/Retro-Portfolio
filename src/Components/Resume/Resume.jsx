import React from 'react'
import './Resume.css'

export default function Resume () {
    return (
        <div id="resume-scene">
            <a href="design_resume.pdf" target="_blank"><div id="resume-icon" className="material-icons">description</div></a>
            
            <div id="resume-title">Resume</div>
            <div id="directions">VIEW RESUME</div>
            <a href="John Teckemeyer - GA Resume.pdf" target="_blank"><div id="ats">ATS Resume</div></a>

            <div id="head-outer-container">
                <div id="head-inner-container2">
                    <img id="my_head" src="neon_me.png" alt="My head in a neon pink 80's syle" />
                </div>
                <div id="head-shadow2"></div>
                <div id="head-inner-container1">
                    <img id="my_head" src="neon_me.png" alt="My head in a neon pink 80's syle" />
                </div>
                <div id="head-shadow1"></div>
            </div>
        </div>
    )
}