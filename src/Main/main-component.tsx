import "./main-component.css";
import { getRandomInitialState } from "./utils/getPassage";
import { useState, useEffect, useRef } from "react";
import type { timerValue } from "../types/types";
import { useAppState } from "../provider/appStateProvider";

function MainComponent({ timer }: { timer: timerValue }) {
  const [initialState, setInitialState] = useState<
    { char: string; wordState: string }[]
  >([]);
  const { appState, setAppState } = useAppState();

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputCharacters, setInputCharacters] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppState(appState.TYPING);
    setInputCharacters(e.target.value);
  };
  const onLoad = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    setInitialState(getRandomInitialState(timer));
  }, [timer]);
  return (
    <div className="main-component" onClick={onLoad}>
      <div className="paragraph">
        {initialState.map((item, index) => {
          return (
            <span key={`${index}-${item}`} className={item.wordState}>
              {item.char === " " ? "\u00A0" : item.char}
            </span>
          );
        })}
      </div>
      <input
        className="input"
        ref={inputRef}
        type="text"
        value={inputCharacters}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default MainComponent;
