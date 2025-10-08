import { MESSAGES, TIMERSTATE, wordState } from "../../consts";
import type { timerValue } from "../../types/types";

export function getRandomPassage(timer: timerValue): string {
  // Find the timer key that matches the given timer value
  const timerKey = Object.keys(TIMERSTATE).find(
    (key) => TIMERSTATE[key as keyof typeof TIMERSTATE] === timer
  );

  if (!timerKey) {
    throw new Error(`Invalid timer value: ${timer}`);
  }

  // Get the passages for this timer duration
  const passages = MESSAGES[timerKey as keyof typeof MESSAGES];

  if (!passages || passages.length === 0) {
    throw new Error(`No passages found for timer: ${timerKey}`);
  }

  // Return a random passage
  return passages[Math.floor(Math.random() * passages.length)];
}

export function getCharactersFromPassage(
  passage: string
): { char: string; wordState: string }[] {
  return passage.split("").map((char) => ({
    char,
    wordState: wordState.UNTYPED,
  }));
}

export function getRandomInitialState(
  timer: timerValue
): { char: string; wordState: string }[] {
  const passage = getRandomPassage(timer);
  return getCharactersFromPassage(passage);
}
