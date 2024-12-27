import React, { useState } from 'react';
import './messages.css';

const Messaging = () => {
  const [messages, setMessages] = useState([
    { text: 'Hey! How are you?', sender: 'other' },
    { text: 'I am good, thanks! How about you?', sender: 'me' },
    { text: 'I\'m doing great, just working on a project!', sender: 'other' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'me' }]);
      setNewMessage('');
    }
  };

  return (

    <div className="messaging-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'me' ? 'my-message' : 'other-message'}`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>

    // <div className="messaging-container">
    //   <div className="messages">
    //     {messages.map((message, index) => (
    //       <div
    //         key={index}
    //         className={`message ${message.sender === 'me' ? 'my-message' : 'other-message'}`}
    //       >
    //         <p>{message.text}</p>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="input-area">
    //     <input
    //       type="text"
    //       value={newMessage}
    //       onChange={(e) => setNewMessage(e.target.value)}
    //       placeholder="Type a message..."
    //     />
    //     <button onClick={handleSendMessage}>Send</button>
    //   </div>
    // </div>
  );
};

export default Messaging;