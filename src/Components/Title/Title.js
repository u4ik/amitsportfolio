import React from 'react'
import Scramble from 'react-scramble'
import { MDBAnimation, MDBIcon, MDBInput } from "mdbreact";

//Import Title CSS
import './Title.css'
//Import React Spring
import { useSpring, animated } from 'react-spring'

import Technologies from './Technologies/Technologies'

import Flower from '../../Assets/Images/flower1.svg'
import Cloud from '../../Assets/Images/cloud.png'

import Images  from '../../Assets/Images/index'



// const { ReactIcon, ScriptIcons, Nodejs, BootstrapIcon, SequelizeIcon,PostgresIcon } = Images;
const Title = () => {
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
    const fade1 = useSpring({
        from: {
            opacity: 0,
            // marginTop:'5vw' 

        },
        to: {
            opacity: 1,

        },
        config: { duration: 800 },
        delay: 200
    })
    const fade3 = useSpring({
        from: {
            opacity: 0,

        },
        to: {
            opacity: 1,

        },
        config: { duration: 800 },
        delay: 400
    })
    return (
        <div style={{}} className='titleWrap'>
            {/* <MDBAnimation type="shake" infinite={true} duration={'15s'} style={{}}>
                <img style={{ pointerEvents: 'none', zIndex: -1, left: '15vw', right: '1vw', bottom: '', top: '-72vw', position: 'absolute', width: '1500px', bottom: '2vw' }} src={Cloud}></img>
            </MDBAnimation> */}

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                <animated.div style={fade3} className='titleNameWrap'>
                    <img style={{ width: '15%', opacity: '.2', marginBottom: '', filter: 'drop-shadow(5px 5px 5px black)' }} draggable='false' src={Flower} className='titleImg'></img>
                </animated.div>

                <animated.div style={fade} className='titleNameWrap'>
                    <h1 style={{ zIndex: 2 }} className='titleName'>Amit Mangat</h1>

                </animated.div>
                <animated.div style={fade1} className='titleDescWrap'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <Scramble
                            style={{ opacity: '.7' }}
                            className='titleDesc'
                            autoStart
                            text="Web Developer/Creative Designer"
                            speed='fast'
                            typewriter={true}
                            steps={[
                                {
                                    roll: 40,
                                    action: '+',
                                    type: 'all',
                                },
                                {
                                    action: '-',
                                    type: 'forward',
                                },
                            ]}
                        />
                        {/* <h5 style={{ opacity: '.7', marginTop: '1%', marginBottom: '-1%', fontSize: '.8em' }} className='titleDesc'>"Creativity is intelligence having fun."</h5> */}
                      <Technologies/>

                    </div>

                </animated.div>

            </div>
        </div>
    )



}

export default Title;