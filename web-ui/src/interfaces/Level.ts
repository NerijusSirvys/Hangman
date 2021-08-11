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
  isLoading: boolean;
  isComplete: boolean;
  leftToGuess: number;
}
