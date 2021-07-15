import { AppActions } from "../types/actions/appActionTypes";

export const updateIsLevelComplete = (secretLength: number): AppActions => {
  return {
    type: "UPDATE_IS_LEVEL_COMPLETE",
    secretLength: secretLength,
  };
};

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

export const incrementCorrectGuesses = (correctGuesses: number): AppActions => {
  return {
    type: "INCREMENT_CORRECT_GUESSES",
    correctGuesses: correctGuesses,
  };
};
