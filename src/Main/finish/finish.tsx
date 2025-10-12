import "./finish.css";
import type { timerValue } from "../../types/types";
import {
  calculateAllMetrics,
  type CharacterData,
} from "../utils/typingCalculations";
import Graph from "../graph/graph";

type FinishProps = {
  totalWordsTyped: number;
  correctlyTypedWords: number;
  timeTaken: number;
  initialTimerValue: timerValue;
  characterData: CharacterData[];
  inputCharacters: string;
  rawWpmHistory: number[];
};

function Finish({
  totalWordsTyped,
  correctlyTypedWords,
  timeTaken,
  initialTimerValue,
  characterData,
  inputCharacters,
  rawWpmHistory,
}: FinishProps) {
  // Calculate all metrics using the new calculation system
  const timeInSeconds = (initialTimerValue - timeTaken) / 1000;
  const metrics = calculateAllMetrics(
    characterData,
    inputCharacters,
    timeInSeconds,
    rawWpmHistory
  );

  const computeStats = () => {
    // const totalWords = charsFromParagraph.length;

    return {
      wordsPerMinute: (totalWordsTyped / 60) * 100,
      Accuracy: ((correctlyTypedWords / totalWordsTyped) * 100).toFixed(2),
    };
  };
  const { wordsPerMinute, Accuracy } = computeStats();
  console.log(`correctlyTypedWords: ${correctlyTypedWords}`);
  console.log(`totalWordsTyped: ${totalWordsTyped}`);
  console.log(`Accuracy: ${Accuracy}`);
  console.log(`wordsPerMinute: ${wordsPerMinute}`);
  console.log(`timeInSeconds: ${timeInSeconds}`);

  // Format time in MM:SS format
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="finish-container">
      {/* Primary Stats */}
      <div className="stats-container">
        <div className="primary-stats">
          <div className="stat-item">
            <span className="stat-label">wpm</span>
            <span className="stat-value">{wordsPerMinute}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">acc</span>
            <span className="stat-value">{Accuracy}%</span>
          </div>
        </div>
        <div className="graph-and-details-container">
          <div className="graph-container">
            <Graph />
          </div>
          <div className="details-container">
            <div className="additional-metric-container">
              <span className="metric-title">raw</span>
              <span className="metric-value">{totalWordsTyped}</span>
            </div>
            <div className="additional-metric-container">
              <span className="metric-title">characters</span>
              <span className="metric-value">
                {metrics.characters.correct}/{metrics.characters.incorrect}/
                {metrics.characters.extra}/{metrics.characters.missed}
              </span>
            </div>

            <div className="additional-metric-container">
              <span className="metric-title">consistency</span>
              <span className="metric-value">{metrics.consistency}%</span>
            </div>
            <div className="additional-metric-container">
              <span className="metric-title">time</span>
              <span className="metric-value">{timeTaken}s</span>
            </div>
            <div className="additional-metric-container">
              <span className="metric-title">session</span>
              <span className="metric-value">
                {formatTime(timeInSeconds)} session
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finish;
