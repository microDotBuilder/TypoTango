import type { TIMERSTATE, appState } from "../consts";

export type timerType = keyof typeof TIMERSTATE;
export type timerValue = (typeof TIMERSTATE)[timerType];

export type appStateType = (typeof appState)[keyof typeof appState];
