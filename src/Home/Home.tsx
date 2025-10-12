import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/footer";
import TimerNav from "../timerNav/timer-nav";
import "./Home.css";
import type { timerValue } from "../types/types";
import { TIMERSTATE } from "../consts";
import MainComponent from "../Main/main-component";
import { appState } from "../consts";
import { useAppState } from "../provider/appStateProvider";

function Home() {
  const [timer, setTimer] = useState<timerValue>(TIMERSTATE["15seconds"]);
  const currentAppState = useAppState();
  return (
    <div className="header-container ">
      <NavBar />
      {currentAppState.state.current === appState.TYPING ||
      currentAppState.state.current === appState.FINISHED ? (
        <></>
      ) : (
        <div className="timer-nav">
          <TimerNav setTimer={setTimer} currentTimer={timer} />
        </div>
      )}

      <div className="home-content">
        <MainComponent initialTimerValue={timer} />
      </div>

      {currentAppState.state.current === appState.TYPING ? (
        <></>
      ) : (
        <div className="footer-content">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
