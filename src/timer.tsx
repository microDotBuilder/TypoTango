import { useEffect, useRef, useState } from "react";
import { TIMERSTATE } from "./consts";

type timerType = keyof typeof TIMERSTATE;
type timerValue = (typeof TIMERSTATE)[timerType];

export function Timer({
  timer,
  onFinish,
}: {
  timer: timerValue;
  onFinish: () => void;
}) {
  const { timerState, startTimer, resetTimer } = useTimer({
    timer,
    onFinish,
  });

  return (
    <div className="timerContainer">
      <div className="timerOptions" role="tablist" aria-label="Preset timers">
        <button
          type="button"
          className="btn btn--outline-accent btn--sm"
          aria-pressed={timer === TIMERSTATE["15seconds"]}
          aria-label="Set 15 seconds"
          // onClick={() => setTimer(TIMERSTATE["15seconds"])}  // wire this if you support changing timer
        >
          {TIMERSTATE["15seconds"]}
        </button>

        <span className="break" aria-hidden="true" />

        <button
          type="button"
          className="btn btn--outline-accent btn--sm"
          aria-pressed={timer === TIMERSTATE["30seconds"]}
          aria-label="Set 30 seconds"
          // onClick={() => setTimer(TIMERSTATE["30seconds"])}
        >
          {TIMERSTATE["30seconds"]}
        </button>

        <span className="break" aria-hidden="true" />

        <button
          type="button"
          className="btn btn--outline-accent btn--sm"
          aria-pressed={timer === TIMERSTATE["60seconds"]}
          aria-label="Set 60 seconds"
          // onClick={() => setTimer(TIMERSTATE["60seconds"])}
        >
          {TIMERSTATE["60seconds"]}
        </button>
      </div>

      <span className="gameTimer" aria-live="polite" aria-atomic="true">
        {timerState}
      </span>

      <div className="controls">
        <button type="button" className="btn btn--primary" onClick={startTimer}>
          START TIMER
        </button>

        <button type="button" className="btn btn--ghost" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

const useTimer = ({
  timer,
  onFinish,
}: {
  timer: timerValue;
  onFinish: () => void;
}) => {
  const [timerState, setTimerState] = useState<number>(timer);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  function startTimer() {
    // Avoid starting multiple intervals
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTimerState((prev) => {
        if (prev <= 1) {
          // stop interval
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          onFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  function resetTimer() {
    // Stop any running interval
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimerState(timer);
  }

  return {
    timerState,
    startTimer,

    resetTimer,
  };
};
