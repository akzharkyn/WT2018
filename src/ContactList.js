import React, { Component } from 'react';
import ContactItem from './ContactItem';

export default class ContactList extends Component {


  constructor(props) {
    super(props);

    this.state = {
        search: ''
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({search:event.target.value});
  }
  
  /* getInitialState() {
    return {
      items: []
    };
  } */

  render() {

    let filteredContacts = this.props.contacts.filter(
        (contact) => {
          return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            || contact.phone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }

      );
    var items = filteredContacts.map((contact) => {
      return <ContactItem key = {contact.id}
      contact = {contact}/>
    });

    return (
    <div className = "container">
      <div>
        <input type = "text" 
        value = {this.state.search}
        placeholder = "Search"
        onChange = {this.updateSearch}/>
      </div>
      <div> {items} </div>
    </div>
      );
    
  }
}

/* onClick = {
        this.onClick.bind(null, contact)
      }*/