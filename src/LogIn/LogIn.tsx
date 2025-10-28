import { useState } from "react";
import { User, Home } from "lucide-react";
import { Link } from "react-router";
import "./LogIn.css";

export default function LogIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Mock handler functions (non-functional)
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for future login functionality
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for future signup functionality
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* User Icon */}
        <div className="login-icon">
          <User className="icon" />
        </div>

        {/* Main Heading */}
        <h1 className="main-heading">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>

        {/* Login Form */}
        {!isSignUp ? (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleSignUpSubmit}>
            <div className="form-group">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Sign Up
            </button>
          </form>
        )}

        {/* Toggle Link */}
        <div className="signup-link">
          <p>
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              type="button"
              onClick={toggleForm}
              className="link-text-button"
            >
              {isSignUp ? "Log In" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* Back to Home Link */}
        <div className="back-to-home">
          <Link to="/home" className="home-link">
            <Home className="home-icon" />
            <span>Back to TypoTango</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
