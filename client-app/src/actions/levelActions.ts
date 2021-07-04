import { AppActions } from "../types/actions/appActionTypes";
import { Level } from "../types/interfaces/Level";

export const setIsLoading = (isLoading: boolean): AppActions => {
  return {
    type: "SET_IS_LOADING",
    payload: isLoading,
  };
};

export const loadNewLevel = (level: Level): AppActions => {
  return {
    type: "LOAD_NEW_LEVEL",
    payload: level,
  };
};

export const incrementFailedGuess = (): AppActions => {
  return {
    type: "INCREMENT_FAILED_GUESES",
  };
};

export const updateHiddenSecret = (index: number): AppActions => {
  return {
    type: "UPDATE_HIDDEN_SECRET",
    payload: index,
  };
};

export const updateIsGuessCorrect = (isCorrect: boolean): AppActions => {
  return {
    type: "UPDATE_IS_GUESS_CORRECT",
    payload: isCorrect,
  };
};
