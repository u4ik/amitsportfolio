import React from 'react';

import GithubIcon from '../../Assets/Images/Icons/github.svg';
import ResumeIcon from '../../Assets/Images/Icons/resume.svg';
import LinkedInIcon from '../../Assets/Images/Icons/linkedin.svg';

//Import React Spring
import { useSpring, animated } from 'react-spring'

const Footer = () => {
    const fadeWrap = useSpring({
        from: {
            opacity: 0,
            // transform: 'scale(2)',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center'
        },
        to: {
            opacity: .7,
            // transform: 'scale(1)'
        },
        config: {duration: 700},
        delay: 1300
    })
    const fade1 = useSpring({
        from: {
            opacity: 0,
            transform: 'scale(2)',
            margin: '-5%'
      
        },
        to: {
            opacity: 1,
            transform: 'scale(1)',
            margin: '1%'
        },
        config: { duration: 400 },
        delay: 1100

    })
    const fade2 = useSpring({
        from: {
            opacity: 0,
            transform: 'scale(2)',
            margin: '-5%'
       
        },
        to: {
            opacity: 1,
            transform: 'scale(1)',
            margin: '1%'
        },
        config: { duration: 400 },
        delay: 1200
    })
    const fade3 = useSpring({
        from: {
            opacity: 0,
            transform: 'scale(2)',
            margin: '-5%'
      
        },
        to: {
            opacity: 1,
            transform: 'scale(1)',
            margin: '1%'
        },
        config: { duration: 400 },
        delay: 1100
    })

    const iconStyle={
        width:'50px',
        // opacity:'.6',
        // filter:'drop-shadow(.7px .7px .5px )'
    }

    return(
        <animated.div style={fadeWrap}>

            <animated.div class="icon1" style={fade1} >
            <a   target="_blank" href='https://www.linkedin.com/in/amitsmangat/'>
                <img src={LinkedInIcon}  style={iconStyle} class="iconImage" alt="" draggable='false'></img>
          
                </a>
            </animated.div>

            <animated.div  style={fade2}  class="icon2" >
            <a target="_blank" href='assets\resume3-27-2020.pdf'>
                <img src={ResumeIcon}  style={iconStyle}  class="iconImage" alt="" draggable='false'></img>
       
                </a>
            </animated.div>

            <animated.div style={fade3}   class="icon3" >
                <a target="_blank"  href='https://github.com/u4ik'>
                    <img src={GithubIcon} style={iconStyle} class="iconImage" alt="" draggable='false'></img>
                </a>
            </animated.div>


        </animated.div>
    );




};

export default Footer;