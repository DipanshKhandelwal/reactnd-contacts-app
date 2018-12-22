import React, { Component } from 'react';
import ListContacts from './ListContacts';
import { Route } from "react-router-dom";
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

class App extends Component {

  state = {
    contacts : [],
  }

  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }

  removeContact = (contact) => {
    this.setState((currentState)=> ({
      contacts: currentState.contacts.filter((cont) => {
        return cont.id !== contact.id
      })
    }))

    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={()=>(
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            onNavigate={() => {
              this.setState(() => ({
                screen: 'create'
              }))
            }}
          />
        )} />
        <Route path='/create' component={CreateContact} />
      </div>
    );
  }
}

export default App;
