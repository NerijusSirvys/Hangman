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

export const updateHiddenSecret = (index: number): AppActions => {
  return {
    type: "UPDATE_HIDDEN_SECRET",
    payload: index,
  };
};
