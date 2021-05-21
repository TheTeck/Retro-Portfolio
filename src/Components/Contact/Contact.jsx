import React from 'react'
import './Contact.css'

export default function Contact () {
    return (
        <div id="contact-scene">
            <div id="contact-title">Contact</div>
            <div id="sun">
                <div className="sun-line" style={{ bottom: '10px', height: '10px' }}></div>
                <div className="sun-line" style={{ bottom: '33px', height: '13px' }}></div>
                <div className="sun-line" style={{ bottom: '62px', height: '16px' }}></div>
                <div className="sun-line" style={{ bottom: '97px', height: '19px' }}></div>
                <div className="sun-line" style={{ bottom: '138px', height: '22px' }}></div>
            </div>
            <div id="sun" className="reflection">
                <div className="sun-line" style={{ bottom: '10px', height: '10px' }}></div>
                <div className="sun-line" style={{ bottom: '33px', height: '13px' }}></div>
                <div className="sun-line" style={{ bottom: '62px', height: '16px' }}></div>
                <div className="sun-line" style={{ bottom: '97px', height: '19px' }}></div>
                <div className="sun-line" style={{ bottom: '138px', height: '22px' }}></div>
            </div>
            <div id="grid-container">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
            <div className="contact-coupling" style={{ top: '750px' }}>
                <p>email: </p>
                <a href="mailto:johnteckemeyer@gmail.com">JOHNTECKEMEYER@GMAIL.COM</a>
            </div>
            <div className="contact-coupling" style={{ top: '850px' }}>
                <p>github: </p>
                <a href="https://github.com/TheTeck" rel="noreferrer" target="_blank">GITUB.COM/THETECK</a>
            </div>
            <div className="contact-coupling" style={{ top: '950px' }}>
                <p>linkedin: </p>
                <a href="https://www.linkedin.com/in/john-teckemeyer/" rel="noreferrer" target="_blank">LINKEDIN.COM/IN/JOHN-TECKEMEYER</a>
            </div>
        </div>
    )
}