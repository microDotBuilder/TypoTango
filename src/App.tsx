/**
 TODO: calculate the stats
  redirect to new page
  with all the stats

  fix all linter error

  ci/cd pipeline

  deploy the website on vercel 

  stage 1 : grab random paragraph now.

  stage2 : fix design issues

  stage3 : graphs

  stage4 :rankings

 */
import "./App.css";
import { PARAGRAPH, TIMERSTATE, wordState } from "./consts";
import { useRef, useState } from "react";

import { TitleNavBar } from "./header/appLogo";
import { NavBar } from "./header/navbar";
import type { timerValue } from "./types/types";
import { useTimer } from "./hooks/useTImerHook";

const charsFromParagraph: { char: string; wordState: string }[] =
  PARAGRAPH.split("").map((char) => ({
    char,
    wordState: wordState.UNTYPED,
  }));

type typeOfInitialState = typeof charsFromParagraph;

function App() {
  const onFinish = () => {
    if (navBarVisibility === false) setNavBarVisibility(true);
    console.log("finished........");
    const { wordsPerMinute, Accuracy } = computeStats();
    // here we weill calculate all the stats and redirect to new page.
    console.log(`words per minute : ${wordsPerMinute}`);
    console.log(`Accuracy : ${Accuracy}`);
  };
  const [timer, setTimer] = useState<timerValue>(TIMERSTATE["15seconds"]);

  const [characters, setCharacters] =
    useState<typeOfInitialState>(charsFromParagraph);
  const [navBarVisibility, setNavBarVisibility] = useState(true);
  const { timerState, startTimer, resetTimer, updateTimer } = useTimer({
    timer,
    onFinish,
  });
  const [inputCharacters, setInputCharacters] = useState("");
  const [totalWordsTyped, setTotalTypedWOrds] = useState(0);
  const [correctolyTypedWords, setCorrectlyTypedWords] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const onLoad = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const computeStats = () => {
    // const totalWords = charsFromParagraph.length;

    return {
      wordsPerMinute: (totalWordsTyped / 60) * 100,
      Accuracy: (correctolyTypedWords / totalWordsTyped) * 100,
    };
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (navBarVisibility) {
      setNavBarVisibility(false);
      startTimer();
      // start the timer here.
    }

    const input = e.target.value;
    const delta = input.length - inputCharacters.length;
    if (delta > 0) {
      setTotalTypedWOrds((prev) => {
        return prev + delta;
      });
    }
    setInputCharacters(input);
    let errorState = false;
    let cc = 0;
    const result = characters.map((char, i) => {
      let status = wordState.UNTYPED;
      if (i < input.length) {
        if (errorState) {
          status = wordState.INCORRECT;
        } else if (input[i] === char.char) {
          status = wordState.CORRECT;
          // setCorrectlyTypedWords();
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
    setCharacters(result);
  }

  return (
    <div className="container" onClick={onLoad}>
      {/* <div className="timer">{TIMER}</div> */}
      <TitleNavBar />
      <div>
        {navBarVisibility ? (
          <NavBar setTimer={setTimer} updateTimer={updateTimer} />
        ) : (
          <></>
        )}
      </div>
      {navBarVisibility === false ? (
        <span className="gameTimer" aria-live="polite" aria-atomic="true">
          {timerState} | {totalWordsTyped} | {correctolyTypedWords}
        </span>
      ) : (
        <></>
      )}

      <div className="paragraph">
        {characters.map((item, index) => {
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
      {/* {navBarVisibility === false ? ( */}
      <div className="resetContainer">
        <button
          className="btn btn--primary"
          onClick={() => {
            resetTimer();
            setNavBarVisibility(true);
            setTotalTypedWOrds(0);
            setCorrectlyTypedWords(0);
            setCharacters(charsFromParagraph);
            setInputCharacters("");
          }}
        >
          Reset
        </button>
      </div>
      {/* ) : (
        <></>
      )} */}
    </div>
  );
}

export default App;
