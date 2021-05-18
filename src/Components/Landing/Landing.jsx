import React from 'react'
import Chevron from '../../Components/Chevron/Chevron'
import './Landing.css'

export default function Landing () {
    return (
        <div id="landing-container">
            <h1 id="title-header">JOHN TECKEMEYER</h1>
            <h1 id="title-header-glow">JOHN TECKEMEYER</h1>
            <h2 id="sub-title-header">Web Developer</h2>
            <div id="scroll-indicator">
                <Chevron dir={'down'} size={30} />
            </div>
        </div>
    )
}