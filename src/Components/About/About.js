import React from 'react';
import Signature from '../../Assets/Images/signature.png'
import { useSpring, animated } from 'react-spring'
const About = (props) => {
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
                <h1 style={{ textShadow: '2px 2px 1px black', marginTop: '2%' }}>About</h1>
            <animated.div style={fade} >
                <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', marginBottom: '2%', marginTop: '2%', minHeight: '40vh' }}>
                    <div style={{ marginLeft: '10%', marginRight: '10%', maxWidth:'33em' }}>
                        
                        <p>Hi, I'm Amit & welcome to my portfolio. I'm 29 years old and I've been a developer for the past year. I've been involved with technology my whole life. With hardware, I've assembled my own computers, fiddled with different components and have performed my own repairs on devices for myself and others. Starting in Feb. 2020, I've ventured down the path to understand the coding side of technology, attending a coding bootcamp(Eleven Fifty Academy) to learn Javascript, and the modern practices of Web Development.</p>

                        <p>After 6 months of intensive learning, I graduated from the bootcamp, quickly understanding the fundamentals during the early stages, showcasing my work along the way. Due to my performance during the course, I was offered to become a learning assistant for Javascript and Web development from the academy. As a learning assistant, my role covered debugging/teaching the new students enrolled in the same WD course that I graduated from. 6 months later, I was offered to being a instructor trainee. I now teach new students through lesson plans, help them understand the core concepts, along with debugging, and guiding them towards success throughout the course.</p>

                        <p>Since I've taken on this role, I still continue to learn, polishing off my skills, and demonstrate what I learn along the way. Having a keen eye for detail, I've always favored work with UI/UX, although I am fully experienced with both frontend and backend frameworks, being able to develop full stack applications. </p>

                        {/* <p>I've excelled well with my journey so far and I look forward to any future opportunities that come my way.</p> */}
                        <div style={{ filter: 'drop-shadow(3px 3px 3px black)' }}>
                            <img alt='signature' style={{ filter: 'invert(1)', opacity: '.7', width: '20%' }} src={Signature} />
                        </div>
                    </div>

                </div>

            </animated.div>
        </>
    )
}

export default About;