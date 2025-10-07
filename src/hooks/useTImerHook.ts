import { useCallback, useEffect, useRef, useState } from "react";
import type { timerValue } from "../types/types";

export const useTimer = ({
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
          onFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [onFinish]);

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
    setTimerState(timer);
  }, [timer]);

  return {
    timerState,
    startTimer,
    resetTimer,
    updateTimer,
  };
};
