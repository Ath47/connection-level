import React, { useState } from "react";
import Layout from "../components/Layout";
import SampleData from "../data/sampleData.json";
import ChatSession from "./ChatSession"; // Import the ChatSession component
import "../styles/HomePage.css";

export default function HomePage() {
  const [level, setLevel] = useState(1);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isButtonsOpen, setIsButtonsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Add state for selected user

  const handleIncrement = () => {
    if (level < 3) setLevel(level + 1);
  };

  const handleDecrement = () => {
    if (level > 1) setLevel(level - 1);
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const toggleButtons = () => {
    setIsButtonsOpen(!isButtonsOpen);
  };

  const getChatList = () => {
    return SampleData.filter((item) => parseInt(item.level, 10) <= level);
  };

  const startChat = (userName) => {
    setSelectedUser(userName); // Set selected user
    setIsChatOpen(false); // Close chat list
  };

  return (
    <Layout>
      <div className="container">
        <div className="connection-level">
          <button className="level-btn" onClick={handleDecrement}>
            -
          </button>
          <h2>Connection Level: {level}</h2>
          <button className="level-btn increment" onClick={handleIncrement}>
            +
          </button>
        </div>
        {isChatOpen && (
          <div className="chat-list">
            <button className="close-btn" onClick={handleChatToggle}>
              X
            </button>
            <ul>
              {getChatList().map((item) => (
                <li key={item.name} onClick={() => startChat(item.name)}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={`floating-buttons ${isButtonsOpen ? "open" : ""}`}>
          <button className="floating-btn chat-btn" onClick={handleChatToggle}>
            C
          </button>
          <button className="floating-btn other-btn">B</button>
          <button className="floating-btn arrow-btn" onClick={toggleButtons}>
            &lt;
          </button>
        </div>
        {selectedUser && (
          <ChatSession userName={selectedUser} onClose={() => setSelectedUser(null)} />
        )}
      </div>
    </Layout>
  );
}
