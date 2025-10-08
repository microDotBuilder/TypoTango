import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/footer";
import TimerNav from "../timerNav/timer-nav";
import "./Home.css";
import type { timerValue } from "../types/types";
import { TIMERSTATE } from "../consts";

function Home() {
  const [timer, setTimer] = useState<timerValue>(TIMERSTATE["15seconds"]);
  return (
    <div className="header-container ">
      <NavBar />
      <div>{timer}</div>
      <div className="timer-nav">
        <TimerNav setTimer={setTimer} />
      </div>
      <div className="home-content">
        <h1 className="home-title">Welcome to the Home Page</h1>
      </div>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
