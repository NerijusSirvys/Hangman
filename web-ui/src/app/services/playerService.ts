import { agent } from "../../api/agent";
import { CompleteLevelModel } from "../../interfaces/CompleteLevelModel";
import { gameState, playerSate } from "../state/stateService";

export const playerService = {
  loadPlayer: async () => {
    gameState.isLoading(true);
    await agent.playerService.getCurrentPlayerAsync().then((response) => {
      playerSate.loadPlayer(response);
    });
  },

  removeStars: async (stars: number) => {
    await agent.playerService.removeStarsAsync(stars).then(() => {
      playerSate.removeStars(stars);
    });
  },

  completeLevel: async (model: CompleteLevelModel) => {
    await agent.playerService.processCompleteLevel(model).then(() => {
      playerSate.processLevelCompletion(model.gameScore);
    });
  },
};
