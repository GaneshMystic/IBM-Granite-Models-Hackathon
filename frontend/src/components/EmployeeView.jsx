import { useState } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/chat");
        const data = await response.json();
        console.log(data.message);
        debugger;
        setMessages([...messages, data.message]);
      } catch (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flex: 1,
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "16px",
          overflowY: "auto",
          border: "1px solid #ddd",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "8px",
              textAlign: msg.role === "user" ? "right" : "left",
            }}
          >
            <p
              style={{
                display: "inline-block",
                padding: "8px",
                borderRadius: "8px",
                backgroundColor: msg.role === "user" ? "#3b82f6" : "#e5e7eb",
                color: msg.role === "user" ? "white" : "black",
              }}
            >
              {msg.content}
            </p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", padding: "8px", gap: "8px" }}>
        <input
          style={{
            padding: "8px",
            flex: 1,
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            opacity: loading ? 0.5 : 1,
          }}
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}
