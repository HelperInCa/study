import React from 'react';

const MakeGuess = ({
  submitGuess,
  updateGuess,
  disabled,
  guess
}) => {
  return (
    <div>
      <input
        onChange={
          e => {
            updateGuess(e.target.value);
          }
        }
        onKeyPress={
          e => {
            if(e.key === 'Enter') {
              submitGuess(guess);
            }
          }
        }
        disabled={disabled}
        value={guess}
      />
      <button
        disabled={disabled}
        onClick={ e => submitGuess(guess) }
      >Guess</button>
    </div>
  );
};

export default MakeGuess;

