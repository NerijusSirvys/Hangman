import { GameActionTypes } from "../../types/actions/gameActionTypes";
import { Game } from "../../types/interfaces/Game";

const initialState: Game = {
  correctGuesses: 0,
  wrongGuesses: 0,
  isLevelCompleted: false,
};

const gameReducer = (
  state: Game = initialState,
  action: GameActionTypes
): Game => {
  switch (action.type) {
    case "INCREMENT_FAILED_GUESES":
      return {
        ...state,
        wrongGuesses: state.wrongGuesses + 1,
      };

    case "INCREMENT_CORRECT_GUESSES":
      return {
        ...state,
        correctGuesses: state.correctGuesses + action.correctGuesses,
      };

    case "RESET_GAME":
      return {
        ...state,
        correctGuesses: 0,
        wrongGuesses: 0,
        isLevelCompleted: false,
      };

    case "UPDATE_IS_LEVEL_COMPLETE":
      return {
        ...state,
        isLevelCompleted: state.correctGuesses === action.secretLength,
      };
    default:
      return state;
  }
};

export default gameReducer;
