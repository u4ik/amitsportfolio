import React from 'react';
//Import React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//Import App CSS
import './App.scss';
//Import Background Img
import BackgroundLandscape from '../src/Assets/Images/landscapegrey.png'
//Import Navbar
import Sitebar from './Components/Nav/Sitebar'
//Import Title
import Title from './Components/Title/Title'
//Import Footer
import Footer from './Components/Footer/Footer'
import { MDBAnimation } from 'mdbreact'
import Projects from './Components/Projects/Projects'

import { useSpring, animated } from 'react-spring'

import About from './Components/About/About'


import Contact from './Components/Contact/Contact'

import Cloud from './Assets/Images/cloud.png'
import Particles from 'react-particles-js';






function App() {

  return (

    <div style={{ maxHeight: '100%', background: `url(${BackgroundLandscape})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', zIndex: -2 }} className="App">
      <div className='test' style={{ backgroundSize: '', minHeight: '100vh', overflow: '' }}>


        <i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i>

        {/* React Router */}

        <Router>


          <Sitebar />

          <Switch>

            <Route exact path='/' >

              <Title />
            </Route>

            <Route exact path='/about'>
           
                <About />
       
            </Route>

            <Route exact path='/projects'>
              {/* <MDBAnimation type='fadeInUp' duration='1s' style={{zIndex:-10, pointerEvent: 'none !important' }}> */}
              <Projects />
              {/* </MDBAnimation > */}
            </Route>



            <Route exact path='/contact'>
              <Contact />
            </Route>




          </Switch>
          <div style={{ opacity: '1', bottom: '24vw', position: 'fixed', left: '', width: '100vw', height: '100vh', background: '', pointerEvents: '' }}>
            <Particles params={{
              "particles": {
                "number": {
                  "value": 60,
                  "density": {
                    "enable": true,
                    "value_area": 1500
                  }
                },
                "line_linked": {
                  "enable": true,
                  "opacity": 0.02
                },
                "move": {
                  "direction": "right",
                  "speed": 0.05
                },
                "size": {
                  "value": 1
                },
                "opacity": {
                  "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.05
                  }
                }
              },
              "interactivity": {
                "events": {
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  }
                },
                "modes": {
                  "push": {
                    "particles_nb": 1
                  }
                }
              },
              "retina_detect": true
            }} />
          </div>
          <Footer />



        </Router>


      </div>

    </div>

  );
}

export default App;
