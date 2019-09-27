import React from 'react';
import ShowSaved from './ShowSaved';

const ShowCounts = ({ count, addToCount, saved }) => {
  return (
    <div>
      <button onClick={ addToCount }>{count}</button>
      <ShowSaved saved={saved}/>
    </div>
  );
};

export default ShowCounts;
