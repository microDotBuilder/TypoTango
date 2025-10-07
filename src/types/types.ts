import type { TIMERSTATE } from "../consts";

export type timerType = keyof typeof TIMERSTATE;
export type timerValue = (typeof TIMERSTATE)[timerType];
