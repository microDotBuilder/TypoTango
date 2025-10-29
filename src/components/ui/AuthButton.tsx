"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import { User } from "lucide-react";
import { useCallback } from "react";
import { Link } from "react-router";
import "./authButton.css";

export function AuthButton() {
  const { isAuthenticated } = useConvexAuth();
  const { signOut } = useAuthActions();
  const userIcon = isAuthenticated ? "user-icon-logedin" : "user-icon";
  const handleSignOut = useCallback(() => {
    void signOut();
  }, [signOut]);
  return (
    <div>
      {isAuthenticated ? (
        <button className="logout-button" onClick={handleSignOut}>
          Sign out
        </button>
      ) : (
        <Link to="/home/signup" className="navbar-option">
          <User className={userIcon} />
        </Link>
      )}
    </div>
  );
}
