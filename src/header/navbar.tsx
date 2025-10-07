import React, { useState } from "react";
import { TIMERSTATE } from "../consts";
import type { timerValue, timerType } from "../types/types";

type Props = {
  // accept the React state setter that's used in App.tsx
  setTimer: React.Dispatch<React.SetStateAction<timerValue>>;
  // changed type: updateTimer accepts a timerValue directly
  updateTimer: (newTimer: timerValue) => void;
};

const buttonStatus = { selected: "selected", notSelected: "notSelected" };

export function NavBar({ setTimer, updateTimer }: Props) {
  // get entries with proper tuple typing
  const entries = Object.entries(TIMERSTATE) as [timerType, timerValue][];
  const [selected, setSelected] = useState<timerType>(entries[0][0]);

  return (
    <div className="timerContainer">
      <span className=" timer">⏱️ time</span>
      <span className="spacer"></span>
      <div className="timerOptions" role="tablist" aria-label="Preset timers">
        {entries.map(([label, value]) => {
          const isSelected = label === selected;
          const statusClass = isSelected
            ? buttonStatus.selected
            : buttonStatus.notSelected;

          return (
            <button
              key={label}
              type="button"
              className={`timer-button ${statusClass}`}
              onClick={() => {
                setTimer(value);
                updateTimer(value);
                setSelected(label);
              }}
              aria-pressed={isSelected}
              aria-label={`Set ${label}`}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
