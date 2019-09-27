import React, { Component } from 'react';
import './App.css';
import Lock from './Lock';

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: 'Locked',
      secret: [1,2,3,4],
      sequence: []
    };
    this.addToSequence = this.addToSequence.bind(this);
    this.resetSequence = this.resetSequence.bind(this);
  }

  resetSequence() {
    this.setState({
      sequence: [],
      status: 'Locked',
    });
  }

  isCodeGood() {
    if(this.state.sequence.length === this.state.secret.length ) {
      if(this.state.sequence.join('') === this.state.secret.join('')) {
        return true;
      }
    }
    return false;
  }

  addToSequence(number) {
    if(this.state.sequence.length < this.state.secret.length ) {
      this.setState({
        sequence: [...this.state.sequence, number]
      }, () => {
        if(this.isCodeGood()) {
          this.setState({
            status: 'Unlocked'
          });
        };
      });
    }
  }

  render() {
    return (
      <div className="combo-lock">
        <Lock
          status={this.state.status}
          sequence={this.state.sequence}
          add={this.addToSequence}
          reset={this.resetSequence}
        />
      </div>
    );
  }
}

export default App;
