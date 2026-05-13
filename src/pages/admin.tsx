import { useState } from "react";

export default function Admin() {
  const [status, setStatus] = useState("live");

  const toggleStatus = async () => {
    const newStatus = status === "live" ? "maintenance" : "live";
    setStatus(newStatus);

    // Optional: call API to update config.json dynamically
    alert(`Site is now: ${newStatus}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Admin Panel</h1>
      <p>Current Status: {status}</p>
      <button onClick={toggleStatus} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Toggle Maintenance
      </button>
    </div>
  );
}
