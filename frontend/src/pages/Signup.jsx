import { useState } from "react";
import axios from "axios";

const Signup = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    role: "user",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await axios.post("http://localhost:3000/signUp", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
        mobile: formData.mobile.trim(),
        role: formData.role,
      });

      if (response.data?.msg === "Email already exists") {
        setMessage({ text: response.data.msg, type: "error" });
      } else {
        setMessage({
          text: response.data?.msg || "Account created successfully.",
          type: "success",
        });
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.msg ||
        error.message ||
        "Failed to create account.";
      setMessage({ text: errorMsg, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h2 className="auth-title">Create account</h2>
        <p className="auth-subtitle">
          Enter your information below to get started.
        </p>
      </div>

      {message.text && (
        <div className={`auth-alert ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSignup} className="auth-form">
        <div className="form-group">
          <label className="form-label" htmlFor="signup-name">
            Full name
          </label>
          <input
            id="signup-name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Jane Smith"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signup-email">
            Email
          </label>
          <input
            id="signup-email"
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
          <label className="form-label" htmlFor="signup-password">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signup-mobile">
            Mobile number
          </label>
          <input
            id="signup-mobile"
            type="tel"
            name="mobile"
            className="form-input"
            placeholder="+1 555 0192"
            value={formData.mobile}
            onChange={handleChange}
            required
            autoComplete="tel"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signup-role">
            Role
          </label>
          <select
            id="signup-role"
            name="role"
            className="form-select"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? "Creating..." : "Create account"}
        </button>
      </form>

      <div className="auth-footer">
        Already have an account?{" "}
        <button type="button" onClick={() => onNavigate && onNavigate("signin")}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Signup;
