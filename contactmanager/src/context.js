import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
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
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
