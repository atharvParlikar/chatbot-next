import Image from "next/image";
import { useEffect, useRef, useState} from "react";


const ChatMessage = (props) => {
  let side = '';
  if (props.sender === "bot") {
    side = "items-start";
  } else {
    side = "items-end";
  }
  return (
    <div className={`chat-container flex flex-col ${side}`}>
      <div className="chat-message bot max-w-xs p-2 mb-2 rounded bg-gray-300 border-2 border-gray-400">
        <p className="m-0">{props.message}</p>
      </div>
    </div>
  );
}


const ChatWindow = ({messages}) => {
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  })

  return (
      <div ref={chatRef} className="chatbot-body p-2 h-300 overflow-y-auto bg-opacity-100 h-96">
        {
          messages.map((chat, index) => <ChatMessage sender={chat.sender} message={chat.content} key={index} />)
        }
      </div>
  );
}


const ChatbotWindow = () => {

  const [messages, setMessages] = useState([
    { sender: "user", content: "Hello there" },
    { sender: "bot", content: "Hi I'm codemate how can i assist you" },
    { sender: "user", content: "What kind of courses do you offer" },
    { sender: "bot", content: "We have courses in all sorts of domains ranging from web, data and DSA what are you looking for?" },
    { sender: "user", content: "I am looking for some python courses" },
    { sender: "bot", content: "sure we have 3 courses related to python"},
    { sender: "bot", content: "1. Basic python programming"},
    { sender: "bot", content: "2. Machine Learning with python"},
    { sender: "bot", content: "3. Master Data Science"}
  ]);
  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  }

  const handleSend = () => {
    const m = messages;
    m.push({sender: 'user', content: input});
    setMessages(m);
    setInput('');
  }
  
  return (
    <div className="chatbot w-300 border border-gray-300 rounded-lg overflow-hidden shadow-lg fixed bottom-10 right-10">
      <div className="chatbot-header bg-slate-800 text-white p-2 flex items-center">
        <Image src="/chatbot-icon.png" alt='chatbot-icon' width={35} height={35} className='rounded-full mr-2'/>
        <h2 className="m-0 text-xl">CodeMate</h2>
      </div>
      <ChatWindow messages={messages} />
      <div className="chatbot-footer p-2 border-t border-gray-300 flex items-center">
        <input
          type="text"
          id="user-input"
          placeholder="Type your message..."
          className="flex-grow p-1 border border-gray-300 rounded mr-2"
          value={input}
          onChange={handleChange}
          onKeyDown={event => event.key === 'Enter' ? handleSend() : {}}
        />
        <button type="button"
                id="send-btn"
                className="p-1 bg-slate-800 text-white cursor-pointer rounded-lg px-3"
                onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotWindow;
