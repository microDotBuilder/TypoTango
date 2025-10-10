import "./main-component.css";
import { getRandomInitialState } from "./utils/getPassage";
import { useState, useEffect, useRef } from "react";
import type { timerValue } from "../types/types";
import { useAppState } from "../provider/appStateProvider";
import { Passage } from "./passage/passage";
import { useTimer } from "../hooks/useTImerHook";
import { wordState } from "../consts";
import Finish from "./finish/finish";
import type { CharacterData } from "./utils/typingCalculations";

function MainComponent({
  initialTimerValue,
}: {
  initialTimerValue: timerValue;
}) {
  const onTypingFinished = () => {
    setAppState(appState.FINISHED);
    resetTimer();
    inputRef.current = null;
    setInputCharacters("");
  };

  const [initialState, setInitialState] = useState<
    { char: string; wordState: string }[]
  >([]);
  const { appState, state, setAppState } = useAppState();
  const { timerState, startTimer, resetTimer, updateTimer } = useTimer({
    timer: initialTimerValue,
    onFinish: onTypingFinished,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputCharacters, setInputCharacters] = useState("");
  const [totalWordsTyped, setTotalTypedWords] = useState(0);
  const [correctlyTypedWords, setCorrectlyTypedWords] = useState(0);
  const [rawWpmHistory, setRawWpmHistory] = useState<number[]>([]);
  const [characterData, setCharacterData] = useState<CharacterData[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppState(appState.TYPING);
    setInputCharacters(e.target.value);
    startTimer();
    // start the matching algorithm here.
    const input = e.target.value;
    const delta = input.length - inputCharacters.length;
    if (delta > 0) {
      setTotalTypedWords((prev) => {
        return prev + delta;
      });
    }
    setInputCharacters(input);
    let errorState = false;
    let cc = 0;
    const result = initialState.map((char, i) => {
      let status = wordState.UNTYPED;
      if (i < input.length) {
        if (errorState) {
          status = wordState.INCORRECT;
        } else if (input[i] === char.char) {
          status = wordState.CORRECT;
          cc += 1;
          errorState = false;
        } else if (input[i] !== char.char) {
          status = wordState.INCORRECT;
          errorState = true;
        }
      }
      return {
        char: char.char,
        wordState: status,
      };
    });

    setCorrectlyTypedWords(cc);
    setInitialState(result);
    setTotalTypedWords(totalWordsTyped + delta);

    // Update character data for calculations
    setCharacterData(result);

    // Calculate and track raw WPM for consistency calculation
    const timeElapsed = (initialTimerValue - timerState) / 1000; // Convert to seconds
    if (timeElapsed > 0) {
      const currentRawWpm = Math.round((input.length / 5) * (60 / timeElapsed));
      setRawWpmHistory((prev) => [...prev, currentRawWpm]);
    }
  };

  const onLoad = () => {
    if (inputRef.current && state.current != appState.FINISHED) {
      setInputCharacters("");
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    setInitialState(getRandomInitialState(initialTimerValue));
    updateTimer(initialTimerValue);
  }, [initialTimerValue, updateTimer]);

  return (
    <div className="setup-container">
      {state.current === appState.TYPING ? (
        <>
          <div className="timer-nav-display">{timerState}</div>
        </>
      ) : (
        <></>
      )}
      <div className="main-component" onClick={onLoad}>
        {state.current === appState.FINISHED ? (
          <Finish
            totalWordsTyped={totalWordsTyped}
            correctlyTypedWords={correctlyTypedWords}
            timeTaken={timerState}
            initialTimerValue={initialTimerValue}
            characterData={characterData}
            inputCharacters={inputCharacters}
            rawWpmHistory={rawWpmHistory}
          />
        ) : (
          <div className="passage-container">
            <Passage
              initialState={initialState}
              inputRef={inputRef}
              inputCharacters={inputCharacters}
              handleInputChange={handleInputChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MainComponent;
