import React, { useState } from 'react'
import Cube from '../../Components/Cube/Cube'
import Panel from '../../Components/Panel/Panel'
import Arc from '../../Components/Arc/Arc'
import './Space.css'

export default function Space() {

    const [perspective, setPerspective] = useState(100)
    
    function movePerspective(e) {
        if (perspective < 200 && e.clientY < window.innerHeight / 2) {
            const temp = perspective
            setPerspective(temp + 2)
        }
        if (perspective > 0 && e.clientY > window.innerHeight / 2) {
            const temp = perspective
            setPerspective(temp - 2)
        }
    }

    return (
        <div 
            className="space-container" 
            style={{ perspectiveOrigin: `50% calc(50% - ${perspective}px)` }}
            onMouseMove={movePerspective}
            >
            <Cube xLoc={0} yLoc={0} zLoc={0} size={200} />
            <Arc />
            <Panel />
            <div id="enter-text">ENTER</div>
        </div>
    )
}