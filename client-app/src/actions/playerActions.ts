import { AppActions } from "../types/actions/appActionTypes";
import { Player } from "../types/interfaces/Player";

export const incrementCompleteLevel = (): AppActions => {
  return {
    type: "INCREMENT_COMPLETE_LEVEL",
  };
};

export const addGameScore = (score: number): AppActions => {
  return {
    type: "ADD_GAME_SCORE",
    gameScoreEarned: score,
  };
};

export const loadPlayer = (player: Player): AppActions => {
  return {
    type: "LOAD_PLAYER",
    player: player,
  };
};

export const removeStars = (stars: number): AppActions => {
  return {
    type: "REMOVE_STARS",
    starsSpent: stars,
  };
};

export const addStars = (stars: number): AppActions => {
  return {
    type: "ADD_STARS",
    starsEarned: stars,
  };
};
