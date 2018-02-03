import React, { Component } from 'react';
import ContactList from './ContactList';
//import './App.css';

var contacts = [
{
  id: 1,
  name: 'Akzharkyn Sagidullina',
  phone: '8-707-148-48-7',
  picture: 'https:www.vokrug.tv/pic/person/9/f/9/0/9f90ceb446d997f0139915b208f5b80b.jpeg',
  email: 'akz@m.ru'
  
}, 
{
  id: 2,
  name: 'Dana Ismagulova',
  phone: '23456-456',
  picture: 'https:assets.wetheunicorns.com/2017/33/alfie-deyes-v4r-1502722024-editorial-short-form-0.png',
  email: 'dana@gm.com'
  
}, 
{
  id: 3,
  name: 'Saltanat Shapkhatova',
  phone: '25-12345',
  picture: 'https:www.faceplusplus.com/images/comparing/left_pic_five.jpg',
  email: 'salta@m.ru'
  
},
{
  id: 4,
  name: 'Indira Baimbetova',
  phone: '24-56789',
  picture: 'https:www.houseoffinance.se/wp-content/uploads/2017/01/ZHANG-Yapei-162783-Biais-Jean-Marc-HEC-Paris-e1484045214842.jpg',
  email:'indi@gm.com'
}];

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts
    };
  }

  render() {
    return (
    
      <div className = "app" >
        <h1> Contact List </h1>  
        <ContactList contacts = {this.state.contacts}/>  
      </div >
    
    );
  }
}

export default Home;






