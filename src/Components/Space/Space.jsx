import React, { useState } from 'react'
import Panel from '../../Components/Panel/Panel'
import Arc from '../../Components/Arc/Arc'
import './Space.css'

export default function Space() {

    const [perspective, setPerspective] = useState(100)
    
    function movePerspective(e) {
        if (perspective < 150 && e.clientY < window.innerHeight / 2) {
            const temp = perspective
            setPerspective(temp + 1)
        }
        if (perspective > 50 && e.clientY > window.innerHeight / 2) {
            const temp = perspective
            setPerspective(temp - 1)
        }
    }

    return (
        <div 
            className="space-container" 
            style={{ perspectiveOrigin: `50% calc(50% - ${perspective}px)` }}
            onMouseMove={movePerspective}
            >
            <Arc />
            <Panel />
        </div>
    )
}