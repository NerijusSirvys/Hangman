import { CompleteLevelModel } from "../interfaces/CompleteLevelModel";
import { FormModel } from "../interfaces/FormModel";
import { LeaderboardEntry } from "../interfaces/LeaderboardEntry";
import { Level } from "../interfaces/Level";
import { Login } from "../interfaces/Login";
import { Player } from "../interfaces/Player";
import { request } from "./agentConfig";

const accountService = {
  loginAsync: (body: FormModel) => request.post<Login>("account/login", body),
  registerAsync: (body: FormModel) => request.post<Login>("account/register", body),
};

const levelService = {
  getLevelAsync: () => request.get<Level>("game/level"),
  restartAsync: () => request.get<Level>("game/restart"),
  showHintAsync: (hintId: string) => request.post("Game/showHint", { hintId: hintId }),
};

const playerService = {
  getCurrentPlayerAsync: () => request.get<Player>("account/getplayer"),
  processCompleteLevel: (data: CompleteLevelModel) => request.post("game/prosesscompleteLevel", data),
  removeStarsAsync: (stars: number) => request.post("game/removestars", { deduction: stars }),
};

const gameService = {
  getLeaderboardData: () => request.get<LeaderboardEntry[]>("game/leaderboard"),
};

export const agent = {
  accountService,
  playerService,
  levelService,
  gameService,
};
