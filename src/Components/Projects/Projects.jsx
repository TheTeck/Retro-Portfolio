import React from 'react'
import Project from '../../Components/Project/Project'
import './Projects.css'

export default function Projects () {
    return (
        <div id="projects">
            <div id="projects-title">Projects</div>
            <div id="projects-container">
                <Project name={"music"} />
                <Project name={"puzzle"} />
                <Project name={"firefly"} />
                <Project name={"dogs"} />
                <Project name={"barter"} />
            </div>
        </div>
    )
}