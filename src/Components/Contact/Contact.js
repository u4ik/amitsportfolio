import React from 'react'
import { MDBIcon } from 'mdbreact'
import { Form, Label,Input } from 'reactstrap'
import './Contact.css'

const Contact = () => {

    return (
        <div className='contactWrap' style={{ }}>
            <div className="" style={{ borderRadius: '20px 20px 0px 0px', marginBottom: '2rem'}}>
            <MDBIcon icon="envelope" />
                <h3 className="mt-2"> Write to me:</h3>
            </div>
            <form autoComplete="off" action="https://formspree.io/f/mgepqrlb" method="POST" style={{marginLeft:'10%',marginRight:'10%'}}>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '27vw', marginRight: '27vw' }}>
                    <Label htmlFor='name'>Name</Label>
                    <Input  className='authfield2' required id='name' type="text" name="name" style={{borderBottom:'1px solid white',zIndex:5}} />
                    <hr className='' style={{ color: '', borderBottom: '1px solid black', marginBottom: '1em', marginTop: '0' }}></hr>
                    <Label htmlFor='email'>Email</Label>
                    <Input className='authfield2' id='email' required type="email" name="_replyto" style={{borderBottom:'1px solid white',zIndex:5}}/>
                    <hr className='' style={{ color: 'black', borderBottom: '1px solid black', marginBottom: '1em', marginTop: '0' }}></hr>
                    <Label htmlFor='message'>Message</Label>
                    <Input className='authfield2' required id='message' type="textbox" name="message"style={{borderBottom:'1px solid white',zIndex:5}} ></Input>
                    <hr className='' style={{ color: 'black', borderBottom: '1px solid black', marginBottom: '1em', marginTop: '0' }}></hr>
                    <button className='authButtons' type="submit" value="Send" style={{ filter: 'drop-shadow(1px 1px 3px black)', minWidth: '70px',maxHeight:'50px', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%', marginBottom: '2em',zIndex:5 }}>Send</button>
                </div>
            </form>


        </div>
    )
}

export default Contact