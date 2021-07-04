import { AppActions } from "../../types/actions/appActionTypes";
import { GameActionTypes } from "../../types/actions/gameActionTypes";
import { Game } from "../../types/interfaces/Game";

const initialState: Game = {
  correctGuesses: 0,
  isGuessCorrect: false,
  wrongGuesses: 0,
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
    case "UPDATE_IS_GUESS_CORRECT":
      return {
        ...state,
        isGuessCorrect: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
