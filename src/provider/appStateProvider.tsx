import { useContext, useReducer, type ReactNode } from "react";
import { AppStateContext } from "../context/AppStateContext";
import { initialState, reducer } from "../context/AppStateContext";
import type { appStateType } from "../types/types";
import { appState } from "../consts";

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setAppState = (newState: appStateType) =>
    dispatch({ type: "SET_STATE", payload: newState });

  return (
    <AppStateContext.Provider value={{ state, setAppState, appState }}>
      {children}
    </AppStateContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}
