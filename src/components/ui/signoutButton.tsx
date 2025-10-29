"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import { useCallback } from "react";

export function SignOutButton() {
  const { isAuthenticated } = useConvexAuth();
  const { signOut } = useAuthActions();
  const handleSignOut = useCallback(() => {
    void signOut();
  }, [signOut]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <button className="login-button" onClick={handleSignOut}>
      Sign out
    </button>
  );
}
