import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";
import API from "../../api/axios";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your AI assistant. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const question = input.trim();

    const userMsg = { text: question, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setTyping(true);

    try {
      const res = await API.post("/chatbot", { message: question });

      const botMsg = {
        text: res.data.reply || "No response from AI.",
        sender: "bot"
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Chatbot error:", error.response?.data || error.message);

      setMessages((prev) => [
        ...prev,
        { text: "AI error. Please try again.", sender: "bot" }
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <div>
      <button className="chat-btn" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chatbox">
          <div className="chat-header">
            AI Assistant
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={msg.sender}>
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="bot typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            <div ref={chatRef}></div>
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;