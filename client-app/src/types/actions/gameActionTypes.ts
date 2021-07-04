const UPDATE_IS_GUESS_CORRECT = "UPDATE_IS_GUESS_CORRECT";

const INCREMENT_FAILED_GUESES = "INCREMENT_FAILED_GUESES";

export interface UpdateIsGuessCorrectAction {
  type: typeof UPDATE_IS_GUESS_CORRECT;
  payload: boolean;
}

export interface IncrementFailedGuessesAction {
  type: typeof INCREMENT_FAILED_GUESES;
}

export type GameActionTypes =
  | UpdateIsGuessCorrectAction
  | IncrementFailedGuessesAction;
