import { useCallback, useState } from "react";
import { User, Home } from "lucide-react";
import { Link, useNavigate } from "react-router";
import "../LogIn/LogIn.css";
import { useAuthActions } from "@convex-dev/auth/react";
import { toast } from "sonner";

export default function SignUpForm() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  //   const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitting(true);
      try {
        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);
        if (flow === "signUp") {
          if (password !== confirmPassword) {
            toast.error("Passwords do not match. Please try again.");
            return;
          }
          formData.delete("confirmPassword");
        }
        formData.set("flow", flow);
        void signIn("password", formData);
        handleRedirectToHome();
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (
            typeof error?.message === "string" &&
            error.message.includes("Invalid password")
          ) {
            toast.error("Invalid password. Please try again.");
          } else {
            toast.error(
              flow === "signIn"
                ? "Could not sign in, did you mean to sign up?"
                : "Could not sign up, did you mean to sign in?"
            );
          }
        }
      } finally {
        setSubmitting(false);
      }
    },
    [flow, password, confirmPassword, signIn]
  );

  //   // Mock handler functions (non-functional)
  //   const handleLoginSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     // Placeholder for future login functionality
  //   };

  //   const handleSignUpSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     // Placeholder for future signup functionality
  //   };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleRedirectToHome = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  //   const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setConfirmPassword(e.target.value);
  //   };
  //   const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setRememberMe(e.target.checked);
  //   };

  const handleSignInAnonymous = useCallback(() => {
    try {
      void signIn("anonymous");
      toast.success("Signed in anonymously successfully");
      handleRedirectToHome();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
        toast.error("Could not sign in anonymously. Please try again.");
      }
    }
  }, [signIn]);

  const toggleForm = () => {
    setFlow(flow === "signIn" ? "signUp" : "signIn");
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
          {flow === "signUp" ? "Create Account" : "Welcome Back"}
        </h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {flow === "signUp" && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Re-enter your password"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div> */}

          <button type="submit" className="login-button" disabled={submitting}>
            {submitting
              ? flow === "signIn"
                ? "Signing in..."
                : "Signing up..."
              : flow === "signIn"
                ? "Sign in"
                : "Sign up"}
          </button>
          <div className="signup-link">
            <p>
              {flow === "signIn"
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                onClick={toggleForm}
                className="link-text-button"
              >
                {flow === "signIn" ? "Sign up instead" : "Sign in instead"}
              </button>
            </p>
          </div>
        </form>
        {/* SignIn Anonomous Link */}
        <div className="signin-anonymous">
          <button
            type="button"
            className="login-button"
            onClick={handleSignInAnonymous}
          >
            Sign in with Anonymous
          </button>
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
