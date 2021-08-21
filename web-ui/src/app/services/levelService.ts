import { AxiosPromise, AxiosResponse } from "axios";
import { agent } from "../../api/agent";
import { Level } from "../../interfaces/Level";
import { gameState, levelState } from "../state/stateService";

const loadLevelBase = async (axiosCall: AxiosPromise) => {
  const initialDelay = 1000;
  const timeBeforeLoading = Date.now();

  axiosCall.then((response: AxiosResponse<Level>) => {
    levelState.loadLevel(response.data);
    const timeAfterLoading = Date.now();
    const loadingTime = timeAfterLoading - timeBeforeLoading;
    let delay = initialDelay - loadingTime;
    delay = delay > 0 ? delay : 0;
    setTimeout(() => {
      gameState.isLoading(false);
    }, delay);
  });
};

export const levelService = {
  showHint: async (id: string) => {
    await agent.levelService.showHintAsync(id).then(() => {
      levelState.showHint(id);
    });
  },

  loadLevel: async () => await loadLevelBase(agent.levelService.getLevelAsync()),

  restartLevel: async () => await loadLevelBase(agent.levelService.restartAsync()),
};
