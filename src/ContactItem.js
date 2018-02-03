import React, { Component } from 'react';
import 


export default class ContactItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
          name: '',
          phone: '',
          email: '',
          inform: []
    };

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    //alert("uuuu");
    return(
        <div className = "brr">

          {this.state.inform.push('Akzha')}
          {this.setState({inform: this.state.inform})}

      
        </div>
      );
    
  }

   

  render() {
    var contact = this.props.contact;

    return ( 
      <div className = 'list-item' onClick = {this._handleClick}>
        <div className="box">
          <div className = "clearfix"><img className = "picture" src = {contact.picture} alt = " "/></div>
          <div className = "info">
          <ul>
            <li><span className = "name"> {contact.name}</span></li>
            <li><span className = "email" > {contact.email}</span></li>
            <li><span className = "phone" > {contact.phone}</span></li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}


