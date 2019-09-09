import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Simple from './Simple';
import ShowCounts from './ShowCounts';
import SaveCounts from './SaveCounts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      saved: [],
    };
    this.addToCount = this.addToCount.bind(this);
    this.saveValue = this.saveValue.bind(this);
  }
  addToCount() {
    this.setState({
      count: this.state.count+1
    });
    console.log(this.state.count);
  }
  saveValue() {
    this.setState({
      saved: [...this.state.saved, this.state.count ]
    });
  }
  render() {
    const greeting = "Hi!";
    const sayIt = `${greeting} World`;
    return (
      <div className="ApplesAreGreat">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <ShowCounts
            count={this.state.count}
            saved={this.state.saved}
            addToCount={this.addToCount}
          />
          <SaveCounts
            saveCount={this.saveValue}
          />
          <p>
            {sayIt}
          </p>
          <Demo />
          <Simple />
        </div>
      </div>
    );
  }
}

export default App;
