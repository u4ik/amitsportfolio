import React from 'react';
//Import React Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//Import App CSS
import './App.css';
//Import Background Img
import BackgroundLandscape from '../src/Assets/Images/landscapegrey.png'
//Import Navbar
import Sitebar from './Components/Nav/Sitebar'
//Import Title
import Title from './Components/Title/Title'

function App() {
  return (
    <div style={{background:`url(${BackgroundLandscape})`, backgroundSize:'cover'}} className="App">
      {/* React Router */}
      <Router>

      
      <Sitebar/>
      <Switch>
      
      <Title/>

      </Switch>
      </Router>


      
    </div>
  );
}

export default App;
