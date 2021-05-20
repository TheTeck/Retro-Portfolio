import React, { useState } from 'react'
import './Skills.css'

export default function Skills () {

    const [currentSkill, setCurrentSkill] = useState('null')

    function showSkill (e) {
        setCurrentSkill(e.target.innerHTML)
    }

    return (
        <div id="skills-scene">
            <div id="skills-title">Technical Skills</div>
            <div id="border-div">
                
                <div id="skills-container">
                    <div className="skill" onMouseOver={showSkill}>JAVASCRIPT</div>
                    <div className="skill" onMouseOver={showSkill}>PYTHON</div>
                    <div className="skill" onMouseOver={showSkill}>HTML</div>
                    <div className="skill" onMouseOver={showSkill}>CSS</div>
                    <div className="skill" onMouseOver={showSkill}>GIT</div>
                    <div className="skill" onMouseOver={showSkill}>GITHUB</div>
                    <div className="skill" onMouseOver={showSkill}>AJAX</div>
                    <div className="skill" onMouseOver={showSkill}>REACT</div>
                    <div className="skill" onMouseOver={showSkill}>REACT ROUTER</div>
                    <div className="skill" onMouseOver={showSkill}>NODE.JS</div>
                    <div className="skill" onMouseOver={showSkill}>EXPRESS.JS</div>
                    <div className="skill" onMouseOver={showSkill}>DJANGO</div>
                    <div className="skill" onMouseOver={showSkill}>MONGODB</div>
                    <div className="skill" onMouseOver={showSkill}>POSTGRESQL</div>
                    <div className="skill" onMouseOver={showSkill}>MONGOOSE.JS</div>
                    <div className="skill" onMouseOver={showSkill}>SEMANTIC UI</div>
                    <div className="skill" onMouseOver={showSkill}>MATERIALIZE</div>
                    <div className="skill" onMouseOver={showSkill}>EJS</div>
                    <div className="skill" onMouseOver={showSkill}>JSX</div>
                    <div className="skill" onMouseOver={showSkill}>OAUTH</div>
                    <div className="skill" onMouseOver={showSkill}>PASSPORT.JS</div>
                    <div className="skill" onMouseOver={showSkill}>JWT</div>
                    <div className="skill" onMouseOver={showSkill}>AWS</div>
                    <div className="skill" onMouseOver={showSkill}>ATLAS</div>
                </div>
                <div id="border-tl" className="corner"></div>
                <div id="border-tr" className="corner"></div>
                <div id="border-bl" className="corner"></div>
                <div id="border-br" className="corner"></div>
                <div id="show-skill">{currentSkill}</div>
            </div>
        </div>
    )
}