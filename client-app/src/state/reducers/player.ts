import { stat } from "fs";
import { PlayerActionTypes } from "../../types/actions/playerActionTypes";
import { Player } from "../../types/interfaces/Player";

const initialState: Player = {
  id: "",
  gameScore: 0,
  numberOfCompleteLevels: 0,
  stars: 0,
  userName: "",
};

const playerReducer = (
  state: Player = initialState,
  action: PlayerActionTypes
): Player => {
  switch (action.type) {
    case "LOAD_PLAYER":
      return action.player;

    case "REMOVE_STARS":
      return {
        ...state,
        stars: state.stars - action.starsSpent,
      };

    case "ADD_STARS":
      return {
        ...state,
        stars: state.stars + action.starsEarned,
      };

    case "ADD_GAME_SCORE":
      return {
        ...state,
        gameScore: state.gameScore + action.gameScoreEarned,
      };

    case "INCREMENT_COMPLETE_LEVEL":
      return {
        ...state,
        numberOfCompleteLevels: state.numberOfCompleteLevels + 1,
      };

    default:
      return state;
  }
};

export default playerReducer;
