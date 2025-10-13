import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { Contact } from "./pages/contact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
