import { Hint } from "./Hint";

export interface Level {
  id: string;
  secret: string;
  clue: string;
  hints: Hint[];
  secretMask: string[];
  starReward: number;
  gameScoreReward: number;
  difficulty: string;
  isComplete: boolean;
  leftToGuess: number;
}
