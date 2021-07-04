import { AppActions } from "../types/actions/appActionTypes";
import { Player } from "../types/interfaces/Player";

export const loadPlayer = (player: Player): AppActions => {
  return {
    type: "LOAD_PLAYER",
    payload: player,
  };
};
