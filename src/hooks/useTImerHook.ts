import { useCallback, useEffect, useRef, useState } from "react";
import type { timerValue } from "../types/types";

export const useTimer = ({
  timer,
  handleResetTimer,
  onFinish,
}: {
  timer: timerValue;
  handleResetTimer: () => void;
  onFinish: () => void;
}) => {
  const [timerState, setTimerState] = useState<number>(timer);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // const navigate = useNavigate();
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // Handle timer finish when timerState reaches 0
  useEffect(() => {
    if (timerState === 0) {
      onFinish();
    }
  }, [timerState, onFinish]);

  const startTimer = useCallback(() => {
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
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  // changed signature: accept timerValue directly
  const updateTimer = useCallback((newTimer: timerValue) => {
    setTimerState(newTimer);
  }, []);

  const resetTimer = useCallback(() => {
    // Stop any running interval
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // set the app state to idle

    // setTimerState(timer);
    // TODO: redirect to home page
    handleResetTimer();
    // setInputCharacters("");
  }, [handleResetTimer]);

  return {
    timerState,
    startTimer,
    resetTimer,
    updateTimer,
  };
};
