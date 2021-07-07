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
        ...action.payload,
        hiddenSecret: hideSecret(action.payload.secret),
      };

    case "UPDATE_HIDDEN_SECRET":
      let updatedHiddenSecret: string[] = state.hiddenSecret;

      // swap hidden letter at index with visible letter
      updatedHiddenSecret[action.payload] = state.secret[action.payload];

      return {
        ...state,
        hiddenSecret: updatedHiddenSecret,
      };

    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "REMOVE_LEVEL":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default levelReducer;
