import React from 'react'
//Import Navbar
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
//Import Link from ReactRouter
import { Link } from 'react-router-dom'
//Import CSS
import './Sitebar.css'

const Sitebar = () => {

    return (

        <Navbar bg="" expand="lg" style={{ backgroundColor: 'rgba(32, 32, 32, .2)', color: 'white', width: '100vw' }}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100vw'}}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <Navbar.Brand style={{marginBottom:'5%'}} href="/home">Amit Mangat's Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ }} className="mr-auto">
                            <Link className="nav-link" to="/home">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/projects">Projects</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </div>
        </Navbar>





    )
}

export default Sitebar;