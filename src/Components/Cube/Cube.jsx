import React from 'react'
import './Cube.css'

export default function Cube ({ xLoc, yLoc, zLoc, size }) {
    return (
        <div className="cube-container" style={{ width: `${size}px`, height: `${size}px` }}>
            <div className="cube-front"></div>
            <div className="cube-back"></div>
            <div className="cube-top"></div>
            <div className="cube-bottom"></div>
            <div className="cube-left"></div>
            <div className="cube-right"></div>
        </div>
    )
}