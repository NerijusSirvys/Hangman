import { LevelActionTypes } from "../../types/actions/levelActionTypes";
import { Level } from "../../types/interfaces/Level";

const initialState: Level = {
  id: "",
  clue: "",
  hiddenSecret: [],
  hints: [],
  secret: "",
  isLoading: true,
};

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
        ...action.level,
        hiddenSecret: hideSecret(action.level.secret),
      };

    case "UPDATE_HIDDEN_SECRET":
      let updatedHiddenSecret: string[] = state.hiddenSecret;

      // swap hidden letter at index with visible letter
      updatedHiddenSecret[action.secretIndex] =
        state.secret[action.secretIndex];

      return {
        ...state,
        hiddenSecret: updatedHiddenSecret,
      };

    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case "REMOVE_LEVEL":
      return {
        ...initialState,
      };

    case "SHOW_HINT":
      let updatedHints = state.hints;

      updatedHints.forEach((hint) => {
        if (hint.id == action.hintId) {
          hint.show = true;
        }
      });
      return {
        ...state,
        hints: updatedHints,
      };

    default:
      return state;
  }
};

export default levelReducer;
