import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
  const messageList = messages.map( message => (
    <li key={message.text}>
      <Message message={message} />
    </li>
  ));
  return (
    <ol className="messages">
      {messageList}
    </ol>
  );
};

export default Messages;

