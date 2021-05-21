import React from 'react'
import Cube from '../../Components/Cube/Cube'
import './Project.css'

export default function Project ({ name }) {

    const musicIcon = <div id="icon-div" className="material-icons">music_note</div>
    const pawIcon = <div id="icon-div" className="material-icons">pets</div>
    const natureIcon = <div id="icon-div" className="material-icons">emoji_nature</div>
    const sellIcon = <div id="icon-div" className="material-icons">sell</div>

    let output

    if (name === 'music') {
        output = (
            <div className="project-container" style={{ height: '1000px'}}>
                <Cube size={200} iconName={musicIcon} />
                <div className="project-name">Sheet Music Maker</div>
                <div className="project-description" style={{ top: '400px'}}>SHEET MUSIC MAKER IS SHEET MUSIC EDITING SOFTWARE WITH A COMMUNITY ASPECT TO IT. A USER CAN SHARE THEIR WORKS WITH ANY OTHER USER THAT FOLLOWS THEM AND VISE VERSA. THIS APPLICATION WAS MY FINAL PROJECT FOR MY FULL-STACK BOOTCAMP AND WAS MADE TO SHOWCASE MY SKILLS LEARNED UP TO THIS POINT, ESPECIALLY WITH REACT.</div>
                <div className="project-link-container">
                    <a href="https://github.com/TheTeck/sheetmusic" rel="noreferrer" target="_blank">GITHUB</a>
                    <a href="https://sheetmusicmaker.herokuapp.com" rel="noreferrer" target="_blank">HEROKU</a>
                </div>
            </div>
        )
    } else if (name === 'barter') {
        output = (
            <div className="project-container" style={{ height: '1180px'}}>
                <Cube size={200} iconName={sellIcon}/>
                <div className="project-name">Bartertown</div>
                <div className="project-description" style={{ top: '400px'}}>BARTERTOWN IS AN ONLINE TRADING SITE WHERE USERS MAY FIND ANYTHING ANOTHER USER IS WANTING TO TRADE AND CAN PROPOSE THEIR OWN TRADES. OTHER USERS MAY LEAVE COMMENTS ON THE ITEM'S SHOW PAGE AS WELL AS MAKE A BID FOR THAT ITEM WITH THEIR OWN ITEMS. IF THE OWNER OF THE ORIGINAL TRADE PROPOSAL LIKES ONE OF THE BIDS, THEY CAN THEN DECIDE TO MAKE A DEAL, WHICH WILL CREATE A PRIVATE LINE OF COMMUNICATION BETWEEN THE TWO USERS AND WILL REMOVE BOTH ITEMS OF THE TRADE FROM THE COMMUNITY.</div>
                <div className="project-link-container">
                    <a href="https://github.com/TheTeck/Bartertown" rel="noreferrer" target="_blank">GITHUB</a>
                    <a href="https://bartertown22.herokuapp.com/" rel="noreferrer" target="_blank">HEROKU</a>
                </div>
            </div>
        )
    } else if (name === 'firefly') {
        output = (
            <div className="project-container" style={{ height: '930px'}}>
                <Cube size={200} iconName={natureIcon}/>
                <div className="project-name">Fireflies</div>
                <div className="project-description" style={{ top: '360px'}}>FIREFLIES IS A SMALL APP THAT I MADE IN ORDER TO PRACTICE MY NEWLY ACQUIRED SKILLS IN REACT. IT WAS A SOLO PROJECT MADE OVER ONE WEEKEND. IT IS A FAIRLY SIMPLE APP THAT DISPLAY "FIREFLIES" IN A DARK ENVIRONMENT, WHICH COULD BE CONSIDERED A MODIFIABLE SCREENSAVER, AT MOST.</div>
                <div className="project-link-container">
                    <a href="https://github.com/TheTeck/Fireflies" rel="noreferrer" target="_blank">GITHUB</a>
                    <a href="https://theteck.github.io/Fireflies/" rel="noreferrer" target="_blank">GH-PAGES</a>
                </div>
            </div>
        )
    } else if (name === 'dogs') {
        output = (
            <div className="project-container" style={{ height: '950px'}}>
                <Cube size={200} iconName={pawIcon}/>
                <div className="project-name">Our Alley</div>
                <div className="project-description" style={{ top: '360px'}}>OUR ALLEY IS A SOCIAL NETWORKING APP THAT HELPS BRING LONELY DOGS TOGETHER BY LETTING USERS SEARCH FOR LOCAL DOGS AND PROPOSE PLAYDATES. THIS WAS A TEAM PROJECT IN WHICH I WAS THE SCRUM AND API MASTER. A MAJOR FOCUS OF MINE ON THIS PROJECT WAS IMPLEMENTING THE GOOGLE MAPS API TO GEOLOCATE OTHER NEARBY USERS.</div>
                <div className="project-link-container">
                    <a href="https://github.com/farazborjian/OurAlley" rel="noreferrer" target="_blank">GITHUB</a>
                    <a href="https://ouralley.herokuapp.com/" rel="noreferrer" target="_blank">HEROKU</a>
                </div>
            </div>
        )
    }

    return (
        <>
            {output}
        </>
    )
}