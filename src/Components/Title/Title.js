import React from 'react'

import Flower from '../../Assets/Images/flower1.svg'




//Import Title CSS
import './Title.css'
//Import React Spring
import { useSpring, animated } from 'react-spring'

const Title = () => {
    const fade = useSpring({
        from: {
            opacity: 0,

        },
        to: {
            opacity: 1,

        },
        config: { duration: 1000 },
        delay: 800
    })
    const fade1 = useSpring({
        from: {
            opacity: 0,

        },
        to: {
            opacity: 1,

        },
        config: { duration: 1000 },
        delay: 1200
    })
    const fade3 = useSpring({
        from: {
            opacity: 0,

        },
        to: {
            opacity: 1,

        },
        config: { duration: 1000 },
        delay: 1400
    })
    return (
        <div style={{ color: 'white', userSelect: 'none', marginBottom: '7%' }} className='titleWrap'>
       
            <animated.div style={fade3} className='titleNameWrap'>
                <img style={{width:'15%', opacity:'.1', marginBottom:''}} draggable='false' src= {Flower} className='titleImg'></img>
            </animated.div>

            <animated.div style={fade} className='titleNameWrap'>
                <h1 style={{zIndex: 2}} className='titleName'>Amit Mangat</h1>
            </animated.div>
            <animated.div style={fade1} className='titleDescWrap'>
                <h5 className='titleDesc' style={{ opacity: '.7' }}>Web Developer/Creative Designer</h5>
            </animated.div>
        </div>
    )



}

export default Title;