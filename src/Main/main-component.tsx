import "./main-component.css";
import { getRandomInitialState } from "./utils/getPassage";
import { useState, useEffect } from "react";
import type { timerValue } from "../types/types";

function MainComponent({ timer }: { timer: timerValue }) {
  const [initialState, setInitialState] = useState<
    { char: string; wordState: string }[]
  >([]);
  useEffect(() => {
    setInitialState(getRandomInitialState(timer));
  }, [timer]);
  return (
    <div className="main-component">
      <div className="paragraph">
        {initialState.map((item, index) => {
          return (
            <span key={`${index}-${item}`} className={item.wordState}>
              {item.char === " " ? "\u00A0" : item.char}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default MainComponent;
