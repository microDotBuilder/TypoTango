import { useAppState } from "../provider/appStateProvider";
import { appState } from "../consts";
import "./NavBar.css";
import { Bell } from "lucide-react";
import { AuthButton } from "../components/ui/AuthButton";
function NavBar() {
  const currentAppState = useAppState();

  return (
    <div className="navbar">
      <div className="navbar-title">TypoTango</div>

      {currentAppState.state.current === appState.TYPING ? (
        <></>
      ) : (
        <div className="navbar-options">
          <a href="/typotango/notifications" className="navbar-option">
            <Bell className="bell-icon" />
          </a>

          <AuthButton />
        </div>
      )}
    </div>
  );
}

export default NavBar;
