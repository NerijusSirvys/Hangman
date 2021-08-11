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
};

const playerService = {
  addStarsAsync: async (stars: number) => {
    await request.post<number>("game/addstars", { reward: stars });
  },

  removeStars: async (stars: number) => {
    await request.post<number>("game/removestars", { deduction: stars });
  },

  UpdateOwnedHintsAsync: async (hintId: string) => {
    //======================
    // TODO:push hint to API
    //======================
  },

  addGameScoreAsync: async (score: number) => {
    await request.post<number>("game/addgamescore", { gameScoreReward: score });
  },

  addCompleteLevelsAsync: async (levelId: string) => {
    await request.post<string>("game/completelevel", {
      completeLevelId: levelId,
    });
  },
};

export const agent = {
  accountService,
  playerService,
  levelService,
};
