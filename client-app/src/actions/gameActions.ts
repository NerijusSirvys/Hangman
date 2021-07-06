import { AppActions } from "../types/actions/appActionTypes";

export const resetGame = (): AppActions => {
  return {
    type: "RESET_GAME",
  };
};

export const incrementFailedGuess = (): AppActions => {
  return {
    type: "INCREMENT_FAILED_GUESES",
  };
};

export const updateIsGuessCorrect = (isCorrect: boolean): AppActions => {
  return {
    type: "UPDATE_IS_GUESS_CORRECT",
    payload: isCorrect,
  };
};

export const incrementCorrectGuesses = (): AppActions => {
  return {
    type: "INCREMENT_CORRECT_GUESSES",
  };
};
