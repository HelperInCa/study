import React from 'react';

const ReportButton = ({
  text,
  className='',
  onClick=() => {}
}) => {
  return (
    <button
      className={className}
      onClick={ () => onClick(text)}
    >{text}</button>
  );
};

export default ReportButton;
