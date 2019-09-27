import React from 'react';

const Outgoing = () => {
  return (
        <div className="outgoing">
          <form action="/chat" method="POST">
            <input className="to-send" name="text" placeholder="Enter message to send"/>
            <button type="submit">Send</button>
          </form>
        </div>
  );
};

export default Outgoing;

