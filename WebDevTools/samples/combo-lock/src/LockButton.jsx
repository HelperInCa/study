import React from 'react';
import ReportButton from './ReportButton';

const LockButton = ({
  number,
  className='',
  onClick=() => {}
}) => {
  const useClass = className ? `${className} lock-button` : `lock-button`;
  return (
    <ReportButton
      className={useClass}
      onClick={onClick}
      text={number}
    />
  );
};

export default LockButton;
