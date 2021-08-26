import { agent } from "../../api/agent";
import { Level } from "../../interfaces/Level";
import { gameState, levelState } from "../state/stateService";

const loadLevelBase = async (promise: Promise<Level>) => {
  const initialDelay = 1000;
  const timeBeforeLoading = Date.now();

  promise.then((response) => {
    levelState.loadLevel(response);
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

  loadLevel: () => loadLevelBase(agent.levelService.getLevelAsync()),

  restartLevel: () => loadLevelBase(agent.levelService.restartAsync()),
};
