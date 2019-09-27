import React from 'react';

const ChangeButton = ({
  disabled,
  isChanging,
  onClick

}) => {
  const text = isChanging ? "Set" : "Change";
  return (
    <button onClick={onClick} disabled={disabled}>{text}</button>
  );
};

export default ChangeButton;
