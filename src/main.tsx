import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./Home/Home";
import { AppStateProvider } from "./provider/appStateProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <AppStateProvider>
      <Home />
    </AppStateProvider>
  </StrictMode>
);
