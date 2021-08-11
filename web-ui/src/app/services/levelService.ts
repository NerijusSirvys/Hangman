import { AxiosResponse } from "axios";
import { agent } from "../../api/agent";
import { Level } from "../../interfaces/Level";
import { loadLevel, showHint } from "../state/levelSlice";
import store from "../store";

const loadNewLevelAsync = async () => {
  agent.levelService.getLevelAsync().then((response: AxiosResponse<Level>) => {
    store.dispatch(loadLevel(response.data));
  });
};

const showNewHint = async (hintId: string) => {
  agent.levelService.showHint(hintId).then((response: AxiosResponse) => {
    store.dispatch(showHint(hintId));
  });
};

export const levelService = {
  loadNewLevel: loadNewLevelAsync,
  showHint: showNewHint,
};
