import React from 'react';

const Guesses = ({ guesses } ) => {
  const guessList = guesses.map( result => <li key={result.guess}><span>{result.guess}</span>: <span>{result.result}</span></li> );
  return (
    <div className="guesses">
      <h2>Guesses Made</h2>
      <ul>
        {guessList}
      </ul>
    </div>
  );
};

export default Guesses;

