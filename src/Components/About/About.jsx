import React from 'react'
import BitBlock from '../../Components/BitBlock/BitBlock'
import './About.css'

export default function About () {
    const c1 = new Audio('snap.mp3')

    function handleC1Key () {
        c1.play()
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
                <div className="floor-col"></div>
                <div className="floor-col"></div>
                <div className="floor-col"></div>
                <div className="floor-col"></div>
                <div className="floor-col"></div>
                <div className="floor-col"></div>
                <div className="floor-col"></div>
            </div>
            <div id="about-title">About Me</div>
            {/* <div id="about-info">I am a full-stack web developer out of the San Francisco bay area - determined to bring unique experiences for users through out-of-the-box solutions. With a background in music composition and luthiery, I can't help but to strive to implement as much artistry in my projects as I can.</div> */}
            <div id="about-info">I AM A FULL-STACK WEB DEVELOPER OUT OF THE SAN FRANCISCO BAY AREA - DETERMINED TO BRING UNIQUE EXPERIENCES FOR USERS THROUGH OUT-OF-THE-BOX SOLUTIONS. WITH A BACKGROUND IN MUSIC COMPOSITION AND LUTHIERY, I STRIVE TO IMPLEMENT AS MUCH ARTISTRY IN MY PROJECTS AS I CAN.</div>
        </div>
    )
}