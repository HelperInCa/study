import React, { Component } from 'react';
import Users from './Users';
import Messages from './Messages';
import Outgoing from './Outgoing';

import './chat.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users:  {
        Amit: true,
        Bao: true
      },
      messages: [
        {
          sender: 'Amit',
          timestamp: new Date(),
          text: "I am really enjoying React!"
        }
      ]
    };
  }
  render() {
    return (
      <div className="chat-app">
        <div className="display-panel">
          <Users users={this.state.users}/>
          <Messages messages={this.state.messages}/>
        </div>
        <Outgoing/>
      </div>
    );
  }
}

export default App;
