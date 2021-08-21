import { AxiosResponse } from "axios";
import { agent } from "../../api/agent";
import { Level } from "../../interfaces/Level";
import { game_isLoading } from "../state/gameSlice";
import { level_loadLevel, level_showHint } from "../state/levelSlice";
import store from "../store";

/**
 * Show hint
 * @param id hint id
 */
const showHint = async (id: string) => {
  await agent.levelService.showHintAsync(id).then(() => {
    store.dispatch(level_showHint(id));
  });
};

/**
 * Load level
 * @param delayed True if add delay
 */
const loadLevel = async (delayed: boolean = false) => {
  const initialDelay = delayed ? 2000 : 0;
  let delay = 0;
  const timeBeforeLoading = Date.now();

  await agent.levelService.getLevelAsync().then((response: AxiosResponse<Level>) => {
    const timeAfterLoading = Date.now();
    const loadingTime = timeAfterLoading - timeBeforeLoading;
    if (initialDelay - loadingTime > 0) {
      delay = initialDelay - loadingTime;
    }
    store.dispatch(level_loadLevel(response.data));
    setTimeout(() => {
      store.dispatch(game_isLoading(false));
    }, delay);
  });
};

const restartLevel = async () => {
  const initialDelay = 2000;
  let delay = 0;
  const timeBeforeLoading = Date.now();

  await agent.levelService.restartAsync().then((response: AxiosResponse<Level>) => {
    store.dispatch(level_loadLevel(response.data));
    const timeAfterLoading = Date.now();
    const loadingTime = timeAfterLoading - timeBeforeLoading;
    if (initialDelay - loadingTime > 0) {
      delay = initialDelay - loadingTime;
    }
    setTimeout(() => {
      store.dispatch(game_isLoading(false));
    }, delay);
  });
};

const levelService = {
  showHint,
  loadLevel,
  restartLevel,
};

export { levelService };
