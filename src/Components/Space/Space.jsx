import React from 'react'
import Cube from '../../Components/Cube/Cube'
import Panel from '../../Components/Panel/Panel'
import Arc from '../../Components/Arc/Arc'
import './Space.css'

export default function Space() {

    

    return (
        <div className="space-container">
            <Cube xLoc={0} yLoc={0} zLoc={0} size={200} />
            <Arc />
            <Panel />
        </div>
    )
}