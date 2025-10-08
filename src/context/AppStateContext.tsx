import { createContext } from "react";
import { appState } from "../consts";
import type { appStateType } from "../types/types";

type State = { current: appStateType };
type Action = { type: "SET_STATE"; payload: appStateType };

export const initialState: State = { current: appState.IDLE };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, current: action.payload };
    default:
      return state;
  }
}

export type ContextValue = {
  state: State;
  setAppState: (s: appStateType) => void;
  appState: typeof appState;
};

export const AppStateContext = createContext<ContextValue | undefined>(
  undefined
);
