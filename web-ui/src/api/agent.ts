import { CompleteLevelData } from "../components/application/ProcessCompleteLevel.logic";
import { FormModel } from "../interfaces/FormModel";
import { Level } from "../interfaces/Level";
import { Login } from "../interfaces/Login";
import { Player } from "../interfaces/Player";
import { request } from "./agentConfig";

const accountService = {
  loginAsync: async (body: FormModel) => {
    return await request.post<Login>("account/login", body);
  },

  registerAsync: async (body: FormModel) => {
    return await request.post<Login>("account/register", body);
  },

  getCurrentPlayerAsync: async () => {
    return await request.get<Player>("account/getplayer");
  },
};

const levelService = {
  getLevelAsync: async () => {
    return await request.get<Level>("game/level");
  },

  showHintAsync: async (hintId: string) => {
    return await request.post("Game/showHint", { hintId: hintId });
  },
};

const playerService = {
  addStarsAsync: async (stars: number) => {
    await request.post<number>("game/addstars", { reward: stars });
  },

  addGameScoreAsync: async (score: number) => {
    await request.post<number>("game/addgamescore", { reward: score });
  },

  addCompleteLevelsAsync: async (levelId: string) => {
    await request.get("game/completelevel");
  },

  processCompleteLevel: async (data: CompleteLevelData) => {
    await request.post<CompleteLevelData>("game/prosesscompleteLevel", data);
  },

  removeStarsAsync: async (stars: number) => {
    await request.post<number>("game/removestars", { deduction: stars });
  },
};

export const agent = {
  accountService,
  playerService,
  levelService,
};
