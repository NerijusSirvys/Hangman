import { agent } from "../../api/agent";
import { player_addScore, player_incrementCompleteLevel } from "../../app/state/playerSlice";
import store from "../../app/store";

export interface CompleteLevelData {
  stars: number;
  gameScore: number;
  levelId: string;
}

/**
 * Save updated stats to the player
 * @returns void
 */
export const ProcessLevelComplete = () => {
  const gameScoreReward = store.getState().level.gameScoreReward;
  const stars = store.getState().player.stars;
  const levelId = store.getState().level.id; // push updated amount of player stars to API

  const data: CompleteLevelData = {
    stars: stars,
    gameScore: gameScoreReward,
    levelId: levelId,
  };

  // Push data to API to be saved
  agent.playerService.processCompleteLevel(data);

  // set player state new score
  store.dispatch(player_addScore(gameScoreReward));

  // set player complete level counter to +1
  store.dispatch(player_incrementCompleteLevel());

  return;
};
