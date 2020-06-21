import React from 'react';

const ReportButton = ({
  text,
  className='',
  onClick=() => {},
  disabled
}) => {
  return (
    <button
      className={className}
      onClick={ () => onClick(text)}
      disabled={disabled}
    >{text}</button>
  );
};

export default ReportButton;
