import React from 'react';

const ValidWords = ({
  words
}) => {
  const wordList = words.map( word => <li key={word}>{word}</li> );
  return (
    <div className="words">
      <h2>Guess one of these words</h2>
      <ul>
        {wordList}
      </ul>
    </div>
  );
};

export default ValidWords;

