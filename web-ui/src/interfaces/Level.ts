import { Hint } from "./Hint";

export interface Level {
  id: string;
  secret: string;
  clue: string;
  hints: Hint[];
  starReward: number;
  gameScoreReward: number;
  difficulty: string;
}
