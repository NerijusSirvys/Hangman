import { AppActions } from "../types/actions/appActionTypes";
import { Level } from "../types/interfaces/Level";

export const showHint = (hintId: string): AppActions => {
  return {
    type: "SHOW_HINT",
    hintId: hintId,
  };
};

export const setIsLoading = (isLoading: boolean): AppActions => {
  return {
    type: "SET_IS_LOADING",
    isLoading: isLoading,
  };
};

export const removeLevel = (): AppActions => {
  return {
    type: "REMOVE_LEVEL",
  };
};

export const loadNewLevel = (level: Level): AppActions => {
  return {
    type: "LOAD_NEW_LEVEL",
    level: level,
  };
};

export const updateHiddenSecret = (index: number): AppActions => {
  return {
    type: "UPDATE_HIDDEN_SECRET",
    secretIndex: index,
  };
};
