import React from 'react';
import LockButton from './LockButton';

const LockRow = ({ nums, add }) => {
  return (
    <div className="row">
      { nums.map( num => (
        <LockButton key={num} number={num} onClick={add} />
      ) ) }
    </div>
  );
};

export default LockRow;
