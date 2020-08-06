import React from 'react';
//Import React Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//Import App CSS
import './App.css';
//Import Background Img
import BackgroundLandscape from '../src/Assets/landscapegrey.png'
//Import Navbar
import Sitebar from './Nav/Sitebar'

function App() {
  return (
    <div style={{background:`url(${BackgroundLandscape})`, backgroundSize:'cover'}} className="App">
      <Router>

      
      <Sitebar/>
      </Router>


      
    </div>
  );
}

export default App;
