import React, { Component } from 'react';
import './App.css';
import spinner from './spinner.gif';
import StartGame from './StartGame';
import ValidWords from './ValidWords';
import Guesses from './Guesses';
import MakeGuess from './MakeGuess';
import HiddenContent from './HiddenContent';
import { getGameId, loadWords, makeGuess } from './services';

// X Start game button
// List of valid words (pull from service on page load)
// List of guesses and their results
// X input for a guess
// X button to make the guess
// X SPA-only
// X REST services for the details
// X Never send the valid word to the client until it has been guessed
// X Making a guess is disabled until a game has started
// A guess once made will be shown in the list of guesses and results
//
// Advanced Activities:
// - Don't accept empty guesses
// - Don't accept guesses that aren't the right length
// - Don't accept guesses that have already been guessed
// - Don't accept guesses that aren't in the list of valid words
// - Show if they win (requires modifying the service to say as much)
// - Don't allow guesses if they've won - they will have to Start new game
// - Don't allow hitting Start New Game if there is an ongoing game that hasn't been won
// - Make the list of guesses not get too large - it should scroll while keeping the valid words and guess input on screen
// - Make the whole thing more attractive
// - Show useful/meaningful error messages
// - Add a spinner while waiting for a services
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: null,
      guess: '',
      guesses: [],
      words: [],
      waiting: false,
    };
    this.startGame = this.startGame.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
    this.updateGuess = this.updateGuess.bind(this);
  }

  updateGuess(guess) {
    this.setState({
      guess,
    });
  }

  startGame() {
    getGameId()
    .then( info => {
      this.setState({
        gameId: info.id,
      });
    })
    .catch( err => `do something real with ${err}` );
  }

  submitGuess(guess) {
    guess = guess || this.state.guess;
    this.setState({
      waiting: true
    }, () => {
      makeGuess({ id: this.state.gameId, guess })
      .then( results => {
        this.setState({
          waiting: false,
          guesses: [ ...this.state.guesses, { guess, result: results.result}],
        });
      })
      .catch( err => `do something real with ${err}` );
    });
  }

  componentDidMount() {
    loadWords()
    .then( words => {
      this.setState({
        words
      });
    })
    .catch( err => `do something real with ${err}` );
  }

  render() {
    return (
      <div className="App">
        <StartGame startGame={this.startGame}/>
        <HiddenContent>
          <ValidWords words={this.state.words}/>
        </HiddenContent>
        { !!this.state.guesses.length && <Guesses guesses={this.state.guesses}/> }
        { this.state.waiting ? <img alt="waiting" src={spinner} className="spinner"/> :
        <MakeGuess
          disabled={!this.state.gameId}
          submitGuess={this.submitGuess}
          updateGuess={this.updateGuess}
          guess={this.state.guess}
        />
        }
      </div>
    );
  }
}

export default App;
