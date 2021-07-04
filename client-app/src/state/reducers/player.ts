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
  if (action.type === "LOAD_PLAYER") {
    return action.payload;
  }
  return state;
};

export default playerReducer;
