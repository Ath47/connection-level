import React, { useState } from "react";
import "../styles/ChatSession.css";

const ChatSession = ({ userName, onClose }) => {
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() === "") return; // Prevent sending empty messages
        setChatMessages([...chatMessages, message]);
        setMessage("");
    };

    return (
        <div className="chat-session">
            <div className="chat-header">
                <h2>{userName}</h2>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div className="chat-messages">
                {chatMessages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatSession;
