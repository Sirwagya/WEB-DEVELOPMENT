import { useState } from "react";
import axios from "axios";

const IsAdmin = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const checkAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/admin", {
        headers: {
          Authorization: token,
        },
      });
      setMsg(response.data.msg || JSON.stringify(response.data));
    } catch (error) {
      setMsg(error.response?.data?.msg || "Authorization failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <button
        type="button"
        className="admin-badge-btn"
        onClick={checkAdmin}
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify admin access"}
      </button>
      {msg && (
        <p style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: "#a1a1aa" }}>
          {msg}
        </p>
      )}
    </div>
  );
};

export default IsAdmin;
