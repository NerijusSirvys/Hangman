import { FormModel } from "../interfaces/FormModel";
import { Level } from "../interfaces/Level";
import { Login } from "../interfaces/Login";
import { Player } from "../interfaces/Player";
import { request } from "./agentConfig";

const accountService = {
  LoginAsync: async (body: FormModel) => {
    return await request.post<Login>("account/login", body);
  },

  getCurrentPlayerAsync: async () => {
    return await request.get<Player>("account/getplayer");
  },
};

const levelService = {
  getLevelAsync: async () => {
    return await request.get<Level>("game/level");
  },

  showHint: async (hintId: string) => {
    return await request.post("Game/showHint", { hintId: hintId });
  },
};

const playerService = {
  addStarsAsync: async (stars: number) => {
    await request.post<number>("game/addstars", { reward: stars });
  },

  removeStars: async (stars: number) => {
    await request.post<number>("game/removestars", { deduction: stars });
  },

  addGameScoreAsync: async (score: number) => {
    await request.post<number>("game/addgamescore", { gameScoreReward: score });
  },

  addCompleteLevelsAsync: async (levelId: string) => {
    await request.get("game/completelevel");
  },
};

export const agent = {
  accountService,
  playerService,
  levelService,
};
