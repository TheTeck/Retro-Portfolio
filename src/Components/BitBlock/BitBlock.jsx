import React, { useState, useEffect } from 'react'
import Bit from '../../Components/Bit/Bit'
import './BitBlock.css'

export default function BitBlock ({ height , width }) {

    const [bits, setBits] = useState([])

    useEffect(() => {
        const theBits = []
        for(let i = 0; i < 50; i++) {
            const temp = []
            temp[0] = Math.floor(Math.random() * (width - 4))
            temp[1] = Math.floor(Math.random() * 4000)
            temp[2] = Math.floor(Math.random() * 3) + 2
            theBits.push(temp)
        }
        setBits(theBits)
    }, [])


    return (
        <div className="bit-block" style={{ height: `${height}px`, width: `${width}px` }}>
            {
                bits.map((bit, index) => {
                    return <Bit key={index} startX={bits[index][0]} delay={bits[index][1]} speed={bits[index][2]} />
                })
            }
            
        </div>
    )
}