import React from 'react';

const DisplayStatus = ({ status }) => {
  return (
    <div className={`${status.toLowerCase()} status`}>{status}</div>
  )
};

export default DisplayStatus;

