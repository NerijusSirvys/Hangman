import { agent } from "../../api/agent";
import { addScore, incrementCompleteLevel } from "../state/playerSlice";
import store from "../store";

const addStarsToPlayer = (stars: number) => {
  agent.playerService.addStarsAsync(stars);
};

const addGamescoreToPlayer = (gameScoreReward: number) => {
  agent.playerService.addGameScoreAsync(gameScoreReward);
  store.dispatch(addScore(gameScoreReward));
};

const addCompleteLevel = (levelId: string) => {
  agent.playerService.addCompleteLevelsAsync(levelId);
  store.dispatch(incrementCompleteLevel());
};

export const playerService = {
  addStarsToPlayer,
  addGamescoreToPlayer,
  addCompleteLevel,
};
