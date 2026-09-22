import { useState } from "react";
import axios from "axios";

const Signin = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await axios.post("http://localhost:3000/signin", {
        email: formData.email.trim(),
        password: formData.password,
      });

      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        setMessage({
          text: "Signed in successfully.",
          type: "success",
        });
      } else {
        setMessage({
          text: response.data?.msg || "Invalid credentials.",
          type: "error",
        });
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.msg ||
        error.message ||
        "Authentication failed.";
      setMessage({ text: errorMsg, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h2 className="auth-title">Sign in</h2>
        <p className="auth-subtitle">
          Enter your email and password to continue.
        </p>
      </div>

      {message.text && (
        <div className={`auth-alert ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSignin} className="auth-form">
        <div className="form-group">
          <label className="form-label" htmlFor="signin-email">
            Email
          </label>
          <input
            id="signin-email"
            type="email"
            name="email"
            className="form-input"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <div className="form-label-row">
            <label className="form-label" htmlFor="signin-password">
              Password
            </label>
            <button
              type="button"
              className="form-link"
              onClick={() => onNavigate && onNavigate("resetpassword")}
            >
              Forgot password?
            </button>
          </div>
          <input
            id="signin-password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      {token && (
        <div className="token-box">
          <div className="token-title">Active session token</div>
          <div>{token.slice(0, 32)}...</div>
        </div>
      )}

      <div className="auth-footer">
        Don't have an account?{" "}
        <button type="button" onClick={() => onNavigate && onNavigate("signup")}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Signin;
