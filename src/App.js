import React, { Component } from 'react';
//import './App.css';
import Home from './Home';

import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {

  
  render() {
    return (
      <Router>
     <div>
      
      <Route path="/home" component={Home} />

     </div>
       
       
  </Router>
    
    );
  }
}

export default App;






