import { Player } from "../interfaces/Player";

const LOAD_PLAYER = "LOAD_PLAYER";
const REMOVE_STARS = "REMOVE_STARS";

export interface RemoveStars {
  type: typeof REMOVE_STARS;
  starsSpent: number;
}

export interface LoadPlayerAction {
  type: typeof LOAD_PLAYER;
  player: Player;
}

export type PlayerActionTypes = LoadPlayerAction | RemoveStars;
