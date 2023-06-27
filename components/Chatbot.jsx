import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

function Chatbot() {
  // useEffect(() => {
  //   userInputRef.current.addEventListener('keydown', handleKeyPress);
  //   const sendBtn = document.getElementById('send-btn');
  //   sendBtn.addEventListener('click', handleSend);
  //   sendBtn.addEventListener('keypress', handleSend);
  // }, []);

  // function handleSend() {
  //   const message = userInputRef.current.value.trim();
  //   if (message !== '') {
  //     addUserMessage(message);
  //     const response = generateBotResponse(message);
  //     addBotMessage(response);
  //     userInputRef.current.value = '';
  //     scrollToBottom();
  //   }
  // }

  // function handleKeyPress(e) {
  //   if (e.keyCode === 13) {
  //     handleSend();
  //     e.preventDefault();
  //   }
  // }

  // function addUserMessage(message) {
  //   const chatMessage = createChatMessage(message, 'user');
  //   chatContainerRef.current.appendChild(chatMessage);
  // }

  // function addBotMessage(message) {
  //   const chatMessage = createChatMessage(message, 'bot');
  //   chatContainerRef.current.appendChild(chatMessage);
  // }

  // function createChatMessage(message, sender) {
  //   const chatMessage = document.createElement('div');
  //   chatMessage.className = `chat-message ${sender}`;
  //   const paragraph = document.createElement('p');
  //   paragraph.textContent = message;
  //   chatMessage.appendChild(paragraph);
  //   return chatMessage;
  // }

  function generateBotResponse(message) {
    // Replace this with your own logic to generate bot responses
    // You can use conditional statements or call an API to get the response
    return 'Bot: Thank you for your message. How can I assist you further?';
  }

  function scrollToBottom() {
    chatbotBodyRef.current.scrollTop = chatbotBodyRef.current.scrollHeight;
  }

  return (
    <div className="chatbot w-300 border border-gray-300 rounded overflow-hidden shadow-lg fixed bottom-10 right-10">
      <div className="chatbot-header bg-blue-900 text-white p-2 flex items-center">
        <Image src="/chatbot-icon.png" alt='chatbot-icon' width={35} height={35} className='rounded-full mr-2'/>
        <h2 className="m-0">CodeMate</h2>
      </div>
      <div className="chatbot-body p-2 h-300 overflow-y-auto bg-opacity-100 h-96">
        <div className="chat-container flex flex-col items-start">
          <div className="chat-message bot max-w-80p p-2 mb-2 rounded">
            <p className="m-0">Hello! I'm CodeMate. How can I assist you today?</p>
          </div>
        </div>
      </div>
      <div className="chatbot-footer p-2 border-t border-gray-300 flex items-center">
        <input
          type="text"
          id="user-input"
          placeholder="Type your message..."
          className="flex-grow p-1 border border-gray-300 rounded mr-2"
        />
        <button type="button" id="send-btn" className="p-1 bg-green-500 text-white cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
