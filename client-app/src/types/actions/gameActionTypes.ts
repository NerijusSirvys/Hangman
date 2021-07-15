import { TypeOfTag } from "typescript";

const INCREMENT_FAILED_GUESES = "INCREMENT_FAILED_GUESES";
const INCREMENT_CORRECT_GUESSES = "INCREMENT_CORRECT_GUESSES";
const RESET_GAME = "RESET_GAME";
const UPDATE_IS_LEVEL_COMPLETE = "UPDATE_IS_LEVEL_COMPLETE";

export interface UpdateIsLevelComplete {
  type: typeof UPDATE_IS_LEVEL_COMPLETE;
  secretLength: number;
}

export interface ResetState {
  type: typeof RESET_GAME;
}

export interface IncrementFailedGuessesAction {
  type: typeof INCREMENT_FAILED_GUESES;
}

export interface IncrementCorrectGuessesAction {
  type: typeof INCREMENT_CORRECT_GUESSES;
  correctGuesses: number;
}

export type GameActionTypes =
  | IncrementFailedGuessesAction
  | IncrementCorrectGuessesAction
  | ResetState
  | UpdateIsLevelComplete;
