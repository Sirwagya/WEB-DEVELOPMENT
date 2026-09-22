import { useState } from "react";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import IsAdmin from "./components/IsAdmin.jsx";
import "./auth.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("signin");

  return (
    <div className="auth-wrapper">
      <nav className="auth-nav">
        <button
          type="button"
          className={`auth-nav-btn ${currentPage === "signin" ? "active" : ""}`}
          onClick={() => setCurrentPage("signin")}
        >
          Sign in
        </button>
        <button
          type="button"
          className={`auth-nav-btn ${currentPage === "signup" ? "active" : ""}`}
          onClick={() => setCurrentPage("signup")}
        >
          Sign up
        </button>
        <button
          type="button"
          className={`auth-nav-btn ${currentPage === "resetpassword" ? "active" : ""}`}
          onClick={() => setCurrentPage("resetpassword")}
        >
          Reset password
        </button>
      </nav>

      <main>
        {currentPage === "signin" && <Signin onNavigate={setCurrentPage} />}
        {currentPage === "signup" && <Signup onNavigate={setCurrentPage} />}
        {currentPage === "resetpassword" && (
          <ResetPassword onNavigate={setCurrentPage} />
        )}
      </main>

      <div style={{ marginTop: "1.5rem" }}>
        <IsAdmin />
      </div>
    </div>
  );
};

export default App;