import { LevelActionTypes } from "../../types/actions/levelActionTypes";
import { Level } from "../../types/interfaces/Level";

const initialState: Level = {
  id: "",
  clue: "",
  failedGuesses: 0,
  hiddenSecret: [],
  hints: [],
  isGuessCorrect: false,
  secret: "",
};

// type Action =
//   | { type: "LOAD_NEW_LEVEL"; payload: Level }
//   | { type: "UPDATE_HIDDEN_SECRET"; payload: number }
//   | { type: "INCREMENT_FAILED_GUESES" }
//   | { type: "UPDATE_IS_GUESS_CORRECT"; payload: boolean };

const hideSecret = (word: string) => {
  return word.split("").map(() => {
    return "#";
  });
};

const levelReducer = (
  state: Level = initialState,
  action: LevelActionTypes
): Level => {
  switch (action.type) {
    case "LOAD_NEW_LEVEL":
      return {
        ...action.payload,
        hiddenSecret: hideSecret(action.payload.secret),
        failedGuesses: 0,
        isGuessCorrect: false,
      };

    case "UPDATE_HIDDEN_SECRET":
      let updatedHiddenSecret: string[] = state.hiddenSecret;

      // swap hidden letter at index with visible letter
      updatedHiddenSecret[action.payload] = state.secret[action.payload];

      return {
        ...state,
        hiddenSecret: updatedHiddenSecret,
      };

    case "INCREMENT_FAILED_GUESES":
      return {
        ...state,
        failedGuesses: state.failedGuesses + 1,
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

export default levelReducer;
