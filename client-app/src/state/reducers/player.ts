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

    default:
      return state;
  }
};

export default playerReducer;
