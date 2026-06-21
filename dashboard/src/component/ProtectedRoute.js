import React, { useEffect } from "react";

import { useAuth } from "./AuthContext";

// Wraps the dashboard: shows a loading state while checking the session,
// then either renders the dashboard or bounces the user to the public
// site's login page (a separate app, hence window.location not <Navigate>).
const ProtectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      window.location.href = process.env.REACT_APP_LOGIN_URL || "http://localhost:3000/login";
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect effect above is in flight; render nothing meanwhile.
    return null;
  }

  return children;
};

export default ProtectedRoute;
