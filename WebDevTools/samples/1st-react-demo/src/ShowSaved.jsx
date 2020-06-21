import React from 'react';

const ShowSaved = ({ saved }) => {
  const numbers = saved.map( (num, index) => <li key={index}>{num}</li> );
  return (
    <ul>
      {numbers}
    </ul>
  );
}

export default ShowSaved;
