/**
 * Typing test calculation utilities
 * Implements the standard typing test metrics according to specifications
 */

export interface TypingMetrics {
  wpm: number;
  rawWpm: number;
  accuracy: number;
  characters: {
    correct: number;
    incorrect: number;
    extra: number;
    missed: number;
  };
  consistency: number;
}

export interface CharacterData {
  char: string;
  wordState: string;
}

/**
 * Calculate WPM (Words Per Minute)
 * Total number of characters in correctly typed words (including spaces),
 * divided by 5 and normalized to 60 seconds
 */
export function calculateWPM(
  correctlyTypedCharacters: number,
  timeInSeconds: number
): number {
  if (timeInSeconds === 0) return 0;
  return Math.round((correctlyTypedCharacters / 5) * (60 / timeInSeconds));
}

/**
 * Calculate Raw WPM
 * Calculated just like WPM, but also includes incorrect words
 */
export function calculateRawWPM(
  totalCharactersTyped: number,
  timeInSeconds: number
): number {
  if (timeInSeconds === 0) return 0;
  return Math.round((totalCharactersTyped / 5) * (60 / timeInSeconds));
}

/**
 * Calculate Accuracy
 * Percentage of correctly pressed keys
 */
export function calculateAccuracy(
  correctCharacters: number,
  totalCharactersTyped: number
): number {
  if (totalCharactersTyped === 0) return 0;
  return Math.round((correctCharacters / totalCharactersTyped) * 100);
}

/**
 * Calculate character statistics
 * correct characters / incorrect characters / extra characters / missed characters
 */
export function calculateCharacterStats(
  initialState: CharacterData[],
  inputCharacters: string
): { correct: number; incorrect: number; extra: number; missed: number } {
  let correct = 0;
  let incorrect = 0;
  let extra = 0;
  let missed = 0;

  const inputLength = inputCharacters.length;
  const initialStateLength = initialState.length;

  // Count correct and incorrect characters up to the length of input
  for (let i = 0; i < Math.min(inputLength, initialStateLength); i++) {
    if (initialState[i].wordState === "correct") {
      correct++;
    } else if (initialState[i].wordState === "incorrect") {
      incorrect++;
    }
  }

  // Count extra characters (typed beyond the passage)
  if (inputLength > initialStateLength) {
    extra = inputLength - initialStateLength;
  }

  // Count missed characters (not typed in the passage)
  for (let i = inputLength; i < initialStateLength; i++) {
    if (initialState[i].wordState === "untyped") {
      missed++;
    }
  }

  return { correct, incorrect, extra, missed };
}

/**
 * Calculate Consistency
 * Based on the variance of raw WPM. Closer to 100% is better.
 * Calculated using the coefficient of variation of raw WPM and mapped onto a scale from 0 to 100
 */
export function calculateConsistency(rawWpmHistory: number[]): number {
  if (rawWpmHistory.length === 0) return 0;

  // Calculate mean
  const mean =
    rawWpmHistory.reduce((sum, wpm) => sum + wpm, 0) / rawWpmHistory.length;

  if (mean === 0) return 0;

  // Calculate variance
  const variance =
    rawWpmHistory.reduce((sum, wpm) => sum + Math.pow(wpm - mean, 2), 0) /
    rawWpmHistory.length;

  // Calculate standard deviation
  const standardDeviation = Math.sqrt(variance);

  // Calculate coefficient of variation
  const coefficientOfVariation = standardDeviation / mean;

  // Map coefficient of variation to 0-100 scale
  // Lower coefficient of variation = higher consistency
  // We'll use an exponential decay function to map CV to consistency percentage
  const consistency = Math.max(
    0,
    Math.min(100, 100 * Math.exp(-coefficientOfVariation * 2))
  );

  return Math.round(consistency);
}

/**
 * Calculate all typing metrics
 */
export function calculateAllMetrics(
  initialState: CharacterData[],
  inputCharacters: string,
  timeInSeconds: number,
  rawWpmHistory: number[] = []
): TypingMetrics {
  const characterStats = calculateCharacterStats(initialState, inputCharacters);
  const totalCharactersTyped = inputCharacters.length;

  const wpm = calculateWPM(characterStats.correct, timeInSeconds);
  const rawWpm = calculateRawWPM(totalCharactersTyped, timeInSeconds);
  const accuracy = calculateAccuracy(
    characterStats.correct,
    totalCharactersTyped
  );
  const consistency = calculateConsistency(rawWpmHistory);

  return {
    wpm,
    rawWpm,
    accuracy,
    characters: characterStats,
    consistency,
  };
}
