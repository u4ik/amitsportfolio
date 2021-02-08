import React from 'react';
import { useState, useEffect } from 'react'
import { MDBView } from 'mdbreact'
import Signature from '../../Assets/Images/signature.png'
import ResumeImg from '../../Assets/Images/resumeimg.png'

import ResumeFile from "../../Assets/Amit Mangat's Resume 2021.pdf"


import UpArrow from '../../Assets/Images/Icons/uparrow.svg'
import { useSpring, animated } from 'react-spring'
import Lightbox from "react-awesome-lightbox";
import './Resume.css'

const Resume = (props) => {

    const [img, setImg] = useState()



    const fade = useSpring({
        from: {
            opacity: 0,

        },
        to: {
            opacity: 1,

        },
        config: { duration: 800 },
        // delay: 800
    })

    return (



        <>

            <Lightbox image={img} title="Amit Mangat's Resume" doubleClickZoom={2} onClose={() => {
                setImg('')
            }} />
            <h1 style={{ textShadow: '2px 2px 1px black', marginTop: '2%' }}>Resume</h1>
            <animated.div style={fade} >
                <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', marginBottom: '2%', marginTop: '2%', minHeight: '40vh' }}>
                    <div style={{ marginLeft: '35%', marginRight: '35%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                        <img alt='resume' src={ResumeImg} style={{ cursor: 'pointer', zIndex: 10, borderRadius: '10px', width: '70%', marginLeft: 'auto', marginRight: 'auto', filter: 'drop-shadow(3px 3px 5px black)' }}
                            onClick={() => { setImg(ResumeImg) }} />
                        <div className='bouncey'>
                            <img className='upArrow' style={{ width: '3%', marginLeft: 'auto', marginRight: 'auto', marginTop: '1%', filter: "invert(1)" }} src={UpArrow} alt='uparrow' />

                            <figcaption className='upArrowText' style={{ marginTop: '1%', opacity: '.8' }}>Click to view</figcaption>
                        </div>
                        <button className='authButtons' style={{ width: '20%', marginLeft: 'auto', marginRight: 'auto' }} onClick={()=>{
                            window.open(ResumeFile)
                        }}>Download</button>
                    </div>

                </div>

            </animated.div>
        </>
    )
}

export default Resume;