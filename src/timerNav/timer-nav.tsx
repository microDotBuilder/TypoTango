import "./timer-nav.css";
import { Clock2 } from "lucide-react";
import type { timerValue } from "../types/types";
import { TIMERSTATE } from "../consts";
function TimerNav({
  setTimer,
  currentTimer,
}: {
  setTimer: (timer: timerValue) => void;
  currentTimer: timerValue;
}) {
  return (
    <div className="timer-container">
      <div className="mode">
        <button className="textButton timer-button">
          <i className="clock">
            <Clock2 className="timer-icon" />
          </i>
          time
        </button>
      </div>

      <div className="spacer rightSpacer"></div>

      <div className="time">
        <button
          className={`textButton timer-button ${
            currentTimer === TIMERSTATE["15seconds"] ? "selected" : ""
          }`}
          onClick={() => setTimer(TIMERSTATE["15seconds"])}
        >
          <span>{TIMERSTATE["15seconds"]}</span>
        </button>
        <button
          className={`textButton timer-button ${
            currentTimer === TIMERSTATE["30seconds"] ? "selected" : ""
          }`}
          onClick={() => setTimer(TIMERSTATE["30seconds"])}
        >
          <span>{TIMERSTATE["30seconds"]}</span>
        </button>
        <button
          className={`textButton timer-button  ${
            currentTimer === TIMERSTATE["60seconds"] ? "selected" : ""
          }`}
          onClick={() => setTimer(TIMERSTATE["60seconds"])}
        >
          <span>{TIMERSTATE["60seconds"]}</span>
        </button>
        <button
          className={`textButton timer-button ${
            currentTimer === TIMERSTATE["120seconds"] ? "selected" : ""
          }`}
          onClick={() => setTimer(TIMERSTATE["120seconds"])}
        >
          <span>{TIMERSTATE["120seconds"]}</span>
        </button>
      </div>
    </div>
  );
}

export default TimerNav;
