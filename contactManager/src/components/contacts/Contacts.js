import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  // constructor() {  // ---this is optional if we need itialisation
  //   super();       //
  //   this.state = { //

  render() {
    return (
      <Consumer>
        {value => {
          // const { contacts } = value;
          return (
            <React.Fragment>
              {value.contacts.map(contact => (
                <Contact
                  key={contact.id}
                  // name={contact.name}  // if we need individual values
                  // email={contact.email}  // if we need individual values
                  // phone={contact.phone}  // if we need individual values
                  contact={contact}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
