import { useState } from "react";
import axios from "axios";

function Chatbot() {

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Yug's assistant. Ask me about Yug, his skills, or projects."
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input
    };

    setMessages((prev) => [...prev, userMessage]);

    try {

      const res = await axios.post(
        "https://yug-portfolio-backend.onrender.com/api/chat",
        { message: input }
      );

      const botMessage = {
        sender: "bot",
        text: res.data.reply
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch {

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server error. Please try again later." }
      ]);

    }

    setInput("");

  };

  return (

    <div>

      {/* Chat Icon Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-black border border-gray-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 1C3.582 1 0 3.686 0 7c0 1.72.94 3.26 2.5 4.31V15l3.1-1.55A9.96 9.96 0 0 0 8 14c4.418 0 8-2.686 8-6s-3.582-7-8-7z"/>
        </svg>

      </button>


      {/* Chat Window */}

      {open && (

        <div className="fixed bottom-20 right-6 z-50 w-80 h-[440px] bg-black border border-gray-700 rounded-xl shadow-2xl flex flex-col">

          {/* Header */}

          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700 text-white font-semibold">

            <span>Yug Assistant</span>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-lg"
            >
              ✕
            </button>

          </div>


          {/* Messages */}

          <div className="flex-1 overflow-y-auto p-3 space-y-3">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] text-sm ${
                    msg.sender === "user"
                      ? "bg-white text-black"
                      : "bg-gray-800 text-gray-200 border border-gray-700"
                  }`}
                >

                  {msg.text.split("\n").map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}

                </div>

              </div>

            ))}

          </div>


          {/* Input */}

          <div className="border-t border-gray-700 flex">

            <input
              className="flex-1 bg-black text-white p-2 outline-none placeholder-gray-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button
              onClick={sendMessage}
              className="bg-white text-black px-4 hover:bg-gray-200 transition"
            >
              Send
            </button>

          </div>

        </div>

      )}

    </div>

  );

}

export default Chatbot;