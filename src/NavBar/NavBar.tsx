import "./NavBar.css";
import { Bell, User } from "lucide-react";
function NavBar() {
  const isLoggedIn = false; // TODO: implement login in future.
  const userIcon = isLoggedIn ? "user-icon-logedin" : "user-icon";
  return (
    <div className="navbar">
      <div className="navbar-title">TypoTango</div>
      <div className="navbar-options">
        <a href="/typotango/notifications" className="navbar-option">
          <Bell className="bell-icon" />
        </a>
        <a href="/typotango/login" className="navbar-option">
          <User className={userIcon} />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
