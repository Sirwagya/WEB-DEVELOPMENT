import { useState } from "react";
import axios from "axios";

const ResetPassword = ({ onNavigate }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleRequestReset = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage({ text: "Email is required.", type: "error" });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await axios.post("http://localhost:3000/forgot", {
        email: email.trim(),
      });

      setMessage({
        text: response.data?.msg || "Password reset link sent to your email.",
        type: "success",
      });
    } catch (error) {
      const errorMsg =
        error.response?.data?.msg ||
        error.message ||
        "Failed to send password reset request.";
      setMessage({ text: errorMsg, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h2 className="auth-title">Reset password</h2>
        <p className="auth-subtitle">
          Enter your email to receive a password reset link.
        </p>
      </div>

      {message.text && (
        <div className={`auth-alert ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleRequestReset} className="auth-form">
        <div className="form-group">
          <label className="form-label" htmlFor="reset-email">
            Email
          </label>
          <input
            id="reset-email"
            type="email"
            className="form-input"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? "Sending..." : "Send reset link"}
        </button>
      </form>

      <div className="auth-footer">
        Remember your password?{" "}
        <button type="button" onClick={() => onNavigate && onNavigate("signin")}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
