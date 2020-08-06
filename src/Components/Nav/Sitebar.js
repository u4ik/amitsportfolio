import React from 'react'
//Import Navbar
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
//Import Link from ReactRouter
import { Link } from 'react-router-dom'
//Import React Spring
import { useSpring, animated } from 'react-spring'
//Import CSS
import './Sitebar.css'

const Sitebar = () => {
    const fadeWrap = useSpring({
        from: {
            opacity: 0,
            // transform: 'scale(2)'
        },
        to: {
            opacity: 1,
            // transform: 'scale(1)'
        },
        config: {duration: 1000}
    })
    const fade1 = useSpring({
        from: {
            opacity: 0,
            transform: 'scale(2)'
        },
        to: {
            opacity: 1,
            transform: 'scale(1)'
        },
        config: { duration: 400 }
    })
    const fade2 = useSpring({
        from: {
            opacity: 0,
            transform: 'scale(2)'
        },
        to: {
            opacity: 1,
            transform: 'scale(1)'
        },
        config: { duration: 400 },
        delay: 200
    })
    const fade3 = useSpring({
        from: {
            opacity: 0,
            transform: 'scale(2)'
        },
        to: {
            opacity: 1,
            transform: 'scale(1)'
        },
        config: { duration: 400 },
        delay: 400
    })
    const fade4 = useSpring({
        from: {
            opacity: 0,
            transform: 'scale(2)'
        },
        to: {
            opacity: 1,
            transform: 'scale(1)'
        },
        config: { duration: 400 },
        delay: 600
    })

    return (

        <Navbar bg="" expand="lg" style={{  color: 'white', width: '100vw' }}>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100vw' }}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <animated.div style={fadeWrap}>
                    <Navbar.Brand style={{ marginBottom: '5%' }} href="/home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{}} className="mr-auto">

                            <animated.div style={fade1}>
                                <Link className="nav-link" to="/home">Home</Link>
                            </animated.div>

                            <animated.div style={fade2}>
                                <Link className="nav-link" to="/about">About</Link>
                            </animated.div>
                            <animated.div style={fade3}>
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </animated.div>
                            <animated.div style={fade4}>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </animated.div>
                        </Nav>
                    </Navbar.Collapse>
                    </animated.div>
                </div>

            </div>

        </Navbar>





    )
}

export default Sitebar;