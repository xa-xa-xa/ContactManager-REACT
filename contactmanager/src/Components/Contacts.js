import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  // constructor() {  // ---this is optional if we need itialisation
  //   super();       //
  //   this.state = { //
  state = {
    contacts: [
      {
        id: "1",
        name: "Jond Doe",
        email: "jdoe@email.com",
        phone: "111-111-1111"
      },
      {
        id: "2",
        name: "Peter Smith",
        email: "psmith@email.com",
        phone: "222-222-2222"
      },
      {
        id: "3",
        name: "Marta Johnes",
        email: "mjohnes@email.com",
        phone: "333-333-3333"
      },
      {
        id: "4",
        name: "Will Marks",
        email: "wmarks@email.com",
        phone: "444-444-4444"
      },
      {
        id: "5",
        name: "Glen Britch",
        email: "gbritch@email.com",
        phone: "555-555-5555"
      }
    ]
    // }  //
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            // name={contact.name}  // if we need individual values
            // email={contact.email}  // if we need individual values
            // phone={contact.phone}  // if we need individual values
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
