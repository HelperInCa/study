import React from 'react';

const User = ({ user }) => {
  return (
    <div className="user">
      <span className="username">{user}</span>
    </div>
  );
};

export default User;
