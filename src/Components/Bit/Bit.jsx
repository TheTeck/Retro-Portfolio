import React, { useState } from 'react'
import './Bit.css'

export default function Bit ({ startX, delay, speed }) {

    const [digit, setDigit] = useState(startX % 2)

    return (
        <div 
            className="bit"
            style={{ 
                left: `${startX}px`, 
                bottom: '-15px', 
                animation: `float-up ${speed}s infinite linear`,
                animationDelay: `${delay}ms`   
            }}
            >{digit}</div>
    )
}