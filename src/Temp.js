import React, { Component } from 'react';
import ContactList from './ContactList';
//import './App.css';


class Temp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: ['Akzha', 'Aida']
    };
  }

  render() {
    return (
    <div>
      <div className = "app" >
        <h1> Contact List </h1>  
        
      </div >
        <li>{this.state.items}</li>
        <div><button>Add contact</button></div>
    </div>
    );
  }
}

export default Temp;






