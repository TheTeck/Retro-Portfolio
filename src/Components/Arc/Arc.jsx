import React from 'react'
import './Arc.css'

export default function Arc () {

    return (
        <>
            <div 
                className="arc" 
                style={{ transform: 'translate(-50%, -50%) translateZ(-250px) translateY(-50px)', animationDelay: '5s'}}>
            </div>
            <div 
                className="arc" 
                style={{ transform: 'translate(-50%, -50%) translateZ(-150px) translateY(-50px)', animationDelay: '4s'}}>
            </div>
            <div 
                className="arc" 
                style={{ transform: 'translate(-50%, -50%) translateZ(-50px) translateY(-50px)', animationDelay: '3s' }}>
            </div>
            <div 
                className="arc" 
                style={{ transform: 'translate(-50%, -50%) translateZ(50px) translateY(-50px)', animationDelay: '2s' }}>
            </div>
            <div 
                className="arc" 
                style={{ transform: 'translate(-50%, -50%) translateZ(150px) translateY(-50px)', animationDelay: '1s' }}>
            </div>
            <div 
                className="arc" 
                style={{ transform: 'translate(-50%, -50%) translateZ(250px) translateY(-50px)' }}>
            </div>
        </>
    )
}