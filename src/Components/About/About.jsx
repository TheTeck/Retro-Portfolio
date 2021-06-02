import React from 'react'
import BitBlock from '../../Components/BitBlock/BitBlock'
import './About.css'

export default function About () {

    const c1 = new Audio('C1.mp3')
    const d1 = new Audio('D1.mp3')
    const eb1 = new Audio('Eb1.mp3')
    const f1 = new Audio('F1.mp3')
    const g1 = new Audio('G1.mp3')
    const ab1 = new Audio('Ab1.mp3')
    const bb1 = new Audio('Bb1.mp3')
    const c2 = new Audio('C2.mp3')

    function handleC1Key () {
        c1.play()
    }
    function handleD1Key () {
        d1.play()
    }
    function handleEb1Key () {
        eb1.play()
    }
    function handleF1Key () {
        f1.play()
    }
    function handleG1Key () {
        g1.play()
    }
    function handleAb1Key () {
        ab1.play()
    }
    function handleBb1Key () {
        bb1.play()
    }
    function handleC2Key () {
        c2.play()
    }

    return (
        <div id="about-scene">
            <div id="bit-block-container">
                <BitBlock height={60} width={40} />
                <BitBlock height={90} width={40} />
                <BitBlock height={170} width={50} />
                <BitBlock height={150} width={70} />
                <BitBlock height={240} width={40} />
                <BitBlock height={170} width={50} />
                <BitBlock height={150} width={70} />
                <BitBlock height={300} width={40} />
                <BitBlock height={200} width={80} />
                <BitBlock height={220} width={35} />
                <BitBlock height={280} width={70} />
                <BitBlock height={130} width={50} />
                <BitBlock height={200} width={35} />
                <BitBlock height={150} width={70} />
                <BitBlock height={170} width={50} />
                <BitBlock height={100} width={35} />
                <BitBlock height={60} width={40} />
            </div>
            <div id="city-floor">
                <div className="floor-flare"></div>
                <div onClick={handleC1Key} className="floor-col"></div>
                <div onClick={handleD1Key} className="floor-col"></div>
                <div onClick={handleEb1Key} className="floor-col"></div>
                <div onClick={handleF1Key} className="floor-col"></div>
                <div onClick={handleG1Key} className="floor-col"></div>
                <div onClick={handleAb1Key} className="floor-col"></div>
                <div onClick={handleBb1Key} className="floor-col"></div>
                <div onClick={handleC2Key} className="floor-col"></div>
            </div>
            <div id="about-title">About Me</div>
            {/* <div id="about-info">I am a full-stack web developer out of the San Francisco bay area - determined to bring unique experiences for users through out-of-the-box solutions. With a background in music composition and luthiery, I can't help but to strive to implement as much artistry in my projects as I can.</div> */}
            <div id="about-info">I AM A FULL-STACK WEB DEVELOPER OUT OF THE SAN FRANCISCO BAY AREA - DETERMINED TO BRING UNIQUE EXPERIENCES FOR USERS THROUGH OUT-OF-THE-BOX SOLUTIONS. WITH A BACKGROUND IN MUSIC COMPOSITION AND HANDCRAFTING CLASSICAL GUITARS, I STRIVE TO IMPLEMENT AS MUCH ARTISTRY IN MY PROJECTS AS I CAN.</div>
        </div>
    )
}