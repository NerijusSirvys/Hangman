import { Player } from "../interfaces/Player";

export const LOAD_PLAYER = "LOAD_PLAYER";

export interface LoadPlayerAction {
  type: typeof LOAD_PLAYER;
  payload: Player;
}

export type PlayerActionTypes = LoadPlayerAction;
