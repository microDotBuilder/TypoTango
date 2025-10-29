import { useQuery } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router";
import { User, LogOut, Home, Shield, UserCircle } from "lucide-react";
import "./profile.css";
import { toast } from "sonner";
import { api } from "../../convex/_generated/api";

function Profile() {
  const user = useQuery(api.auth.loggedInUser);
  const { signOut } = useAuthActions();
  const navigate = useNavigate();

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();
      toast.success("Signed out successfully");
      navigate("/home");
    } catch {
      toast.error("Could not sign out. Please try again.");
    }
  }, [signOut, navigate]);

  // If user data is loading
  if (user === undefined) {
    return (
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-loading">
            <User className="icon" />
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  // If user is not logged in, redirect to home
  if (!user) {
    return navigate("/home");
  }

  // Determine authentication type
  const isPasswordUser = "email" in user && user.email;
  const authType = isPasswordUser ? "password" : "anonymous";
  const userName = isPasswordUser
    ? user.email
    : `Anonymous User (${user._id.slice(-8)})`;

  return (
    <div className="profile-container">
      <div className="profile-content">
        {/* User Icon */}
        <div className="profile-icon">
          <UserCircle className="icon" />
        </div>

        {/* Main Heading */}
        <h1 className="main-heading">Profile</h1>

        {/* Profile Card */}
        <div className="profile-card">
          {/* User Name/Email */}
          <div className="profile-section">
            <h2 className="section-label">Account</h2>
            <div className="profile-field">
              <span className="field-label">Username/Email</span>
              <span className="field-value">{userName}</span>
            </div>
          </div>

          {/* Authentication Type */}
          <div className="profile-section">
            <h2 className="section-label">Authentication</h2>
            <div className="auth-badge-container">
              <div className={`auth-badge ${authType}`}>
                {authType === "password" ? (
                  <Shield className="badge-icon" />
                ) : (
                  <User className="badge-icon" />
                )}
                <span className="badge-text">
                  {authType === "password" ? "Password" : "Anonymous"}
                </span>
              </div>
            </div>
          </div>

          {/* Email for password users */}
          {isPasswordUser && "email" in user && (
            <div className="profile-section">
              <h2 className="section-label">Email</h2>
              <div className="profile-field">
                <span className="field-label">Email Address</span>
                <span className="field-value">{user.email}</span>
              </div>
            </div>
          )}

          {/* Anonymous user upgrade prompt */}
          {!isPasswordUser && (
            <div className="profile-section upgrade-section">
              <div className="upgrade-prompt">
                <h3>Upgrade Your Account</h3>
                <p>
                  Create a password to save your data and access features across
                  devices.
                </p>
                <Link to="/home/signup" className="upgrade-button">
                  Create Account
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="profile-actions">
          <button
            className="logout-button action-button"
            onClick={handleSignOut}
          >
            <LogOut className="button-icon" />
            <span>Sign Out</span>
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

export default Profile;
