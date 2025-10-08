import type { TIMERSTATE } from "../consts";

export type timerType = keyof typeof TIMERSTATE;
export type timerValue = (typeof TIMERSTATE)[timerType];

export const appState = {
  IDLE: "IDLE",
  TYPING: "TYPING",
  FINISHED: "FINISHED",
};
export type appState = (typeof appState)[keyof typeof appState];
