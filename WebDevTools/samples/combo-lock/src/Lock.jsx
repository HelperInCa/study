import React from 'react';
import LockButton from './LockButton';
import ReportButton from './ReportButton';
import DisplaySequence from './DisplaySequence';
import DisplayStatus from './DisplayStatus';
import LockRow from './LockRow';

const Lock = ({ status, sequence, add, reset }) => {

  const row1 = [1,2,3].map( num => (
    <LockButton key={num} number={num} onClick={add} />
  ) );

  return (
    <div className="lock">
      <DisplayStatus status={status} />
      <DisplaySequence sequence={sequence}/>
      <div className="row">
        { row1 }
      </div>
      <LockRow nums={ [4,5,6] } add={add} />
      <div className="row">
        <LockButton number="7" onClick={add} />
        <LockButton number="8" onClick={add} />
        <LockButton number="9" onClick={add} />
      </div>
      <ReportButton onClick={reset} text="Reset"/>
    </div>
  );
};
export default Lock;
