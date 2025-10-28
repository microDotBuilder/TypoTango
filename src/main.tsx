import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { Contact } from "./pages/contact";
import { Support } from "./pages/support";
import { TermsOfService } from "./pages/terms-of-service";
import { SecurityPolicy } from "./pages/security-policy";
import { PrivacyPolicy } from "./pages/privacy-policy";
import LogIn from "./LogIn/LogIn";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<App />} />
        <Route path="/home/login" element={<LogIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/security-policy" element={<SecurityPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
