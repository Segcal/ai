import React from "react";
import "./ChatBubble.css";

const ChatBubble = ({ text, isUser }) => {
  return (
    <div className={`chat-bubble ${isUser ? "user" : "bot"}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatBubble;
