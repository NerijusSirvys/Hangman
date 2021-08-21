import { AxiosResponse } from "axios";
import { agent } from "../../api/agent";
import { CompleteLevelModel } from "../../interfaces/CompleteLevelModel";
import { Player } from "../../interfaces/Player";
import { gameState, playerSate } from "../state/stateService";

export const playerService = {
  loadPlayer: async () => {
    gameState.isLoading(true);
    await agent.playerService.getCurrentPlayerAsync().then((response: AxiosResponse<Player>) => {
      playerSate.loadPlayer(response.data);
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
