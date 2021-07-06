const UPDATE_IS_GUESS_CORRECT = "UPDATE_IS_GUESS_CORRECT";
const INCREMENT_FAILED_GUESES = "INCREMENT_FAILED_GUESES";
const INCREMENT_CORRECT_GUESSES = "INCREMENT_CORRECT_GUESSES";
const RESET_GAME = "RESET_GAME";

export interface ResetState {
  type: typeof RESET_GAME;
}

export interface UpdateIsGuessCorrectAction {
  type: typeof UPDATE_IS_GUESS_CORRECT;
  payload: boolean;
}

export interface IncrementFailedGuessesAction {
  type: typeof INCREMENT_FAILED_GUESES;
}

export interface IncrementCorrectGuessesAction {
  type: typeof INCREMENT_CORRECT_GUESSES;
}

export type GameActionTypes =
  | UpdateIsGuessCorrectAction
  | IncrementFailedGuessesAction
  | IncrementCorrectGuessesAction
  | ResetState;
