import React, { Component } from 'react';
import './App.css';
import Lock from './Lock';
import { checkLock, changeLock } from './services';

class App extends Component {
  constructor() {
    super();
    this.state = {
      change: false,
      status: 'Locked',
      sequence: []
    };
    this.addToSequence = this.addToSequence.bind(this);
    this.resetSequence = this.resetSequence.bind(this);
    this.toggleChanging = this.toggleChanging.bind(this);
  }

  resetSequence() {
    this.setState({
      sequence: [],
      status: 'Locked',
    });
  }

  toggleChanging() {
    if(this.state.change) {
      changeLock(this.state.sequence.join(''))
    }
    this.setState({
      change: !this.state.change,
      sequence: []
    });
  }

  addToSequence(number) {
    if(!this.state.secretLength || ( this.state.sequence.length < this.state.secretLength) ){
      this.setState({
        sequence: [...this.state.sequence, number]
      }, () => {
        if(!this.state.change) {
          checkLock( this.state.sequence.join('') )
          .then( result => {
            this.setState({
              status: result.status,
              secretLength: result.length
            });
          })
          .catch( error => { console.warn('I did not listen and left this here', error.code) });
        }
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
          change={this.state.change}
          toggleChanging={this.toggleChanging}
        />
      </div>
    );
  }
}

export default App;
