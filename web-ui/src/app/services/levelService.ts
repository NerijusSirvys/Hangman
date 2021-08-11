import { AxiosResponse } from "axios";
import { agent } from "../../api/agent";
import { Level } from "../../interfaces/Level";
import { loadLevel } from "../state/levelSlice";
import store from "../store";

const loadNewLevelAsync = async () => {
  agent.levelService.getLevelAsync().then((response: AxiosResponse<Level>) => {
    store.dispatch(loadLevel(response.data));
  });
};

export const levelService = {
  loadNewLevel: loadNewLevelAsync,
};
