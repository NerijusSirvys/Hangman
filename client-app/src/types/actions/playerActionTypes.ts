import { Player } from "../interfaces/Player";

const LOAD_PLAYER = "LOAD_PLAYER";
const REMOVE_STARS = "REMOVE_STARS";
const ADD_STARS = "ADD_STARS";

export interface AddStars {
  type: typeof ADD_STARS;
  starsEarned: number;
}
export interface RemoveStars {
  type: typeof REMOVE_STARS;
  starsSpent: number;
}

export interface LoadPlayerAction {
  type: typeof LOAD_PLAYER;
  player: Player;
}

export type PlayerActionTypes = LoadPlayerAction | RemoveStars | AddStars;
