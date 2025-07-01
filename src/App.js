import React from "react";
import axios from "axios";

const API_BASE = "http://localhost:5000/api";

function App() {
  const handleBlock = () => {
    axios.post(`${API_BASE}/block`)
      .then(() => alert("✅ Blocked internet on all students"))
      .catch(() => alert("❌ Failed to block"));
  };

  const handleUnblock = () => {
    axios.post(`${API_BASE}/unblock`)
      .then(() => alert("✅ Unblocked internet on all students"))
      .catch(() => alert("❌ Failed to unblock"));
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>🌐 Internet Access Control</h1>
      <button onClick={handleBlock} style={buttonStyle}>🔒 Block All</button>
      <button onClick={handleUnblock} style={buttonStyle}>🔓 Unblock All</button>
    </div>
  );
}

const buttonStyle = {
  margin: "10px",
  padding: "15px 30px",
  fontSize: "18px",
  borderRadius: "10px",
  cursor: "pointer"
};

export default App;
