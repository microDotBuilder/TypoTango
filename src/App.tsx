import Home from "./Home/Home";
import { AppStateProvider } from "./provider/appStateProvider";

export function App() {
  return (
    <AppStateProvider>
      <Home />
    </AppStateProvider>
  );
}
