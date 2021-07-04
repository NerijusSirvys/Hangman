import { Level } from "../interfaces/Level";

export const UPDATE_IS_GUESS_CORRECT = "UPDATE_IS_GUESS_CORRECT";
export const UPDATE_HIDDEN_SECRET = "UPDATE_HIDDEN_SECRET";
export const LOAD_NEW_LEVEL = "LOAD_NEW_LEVEL";
export const INCREMENT_FAILED_GUESES = "INCREMENT_FAILED_GUESES";

export interface UpdateIsGuessCorrectAction {
  type: typeof UPDATE_IS_GUESS_CORRECT;
  payload: boolean;
}

export interface UpdateHiddenSecretAction {
  type: typeof UPDATE_HIDDEN_SECRET;
  payload: number;
}

export interface LoadNewLevelAction {
  type: typeof LOAD_NEW_LEVEL;
  payload: Level;
}

export interface IncrementFailedGuessesAction {
  type: typeof INCREMENT_FAILED_GUESES;
}

export type LevelActionTypes =
  | UpdateIsGuessCorrectAction
  | UpdateHiddenSecretAction
  | LoadNewLevelAction
  | IncrementFailedGuessesAction;
