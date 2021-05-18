import React, { useState, useEffect } from 'react'
import './Chevron.css'

export default function Chevron ({ dir, size }) {

    const [direction, setDirection] = useState(45)

    useEffect(() => {
        if (dir === 'up') setDirection(45)
        else if (dir === 'left') setDirection(135)
        else if (dir === 'down') setDirection(225)
        else setDirection(315)
    }, [])
    

    return (
        <div 
            className="chevron" 
            style={{ 
                width: `${size}px`, 
                height: `${size}px`,
                transform: `rotateZ(${direction}deg)`
            }}>
        </div>
    )
}