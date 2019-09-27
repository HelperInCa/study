import React from 'react';
import User from './User';

const Users = ({ users }) => {
  const userList = Object.keys(users).map( user => (
    <li key={user}>
      <User user={user}/>
    </li>
  ) );
  return (
    <ul className="users">
      {userList}
    </ul>
  );
};

export default Users;
