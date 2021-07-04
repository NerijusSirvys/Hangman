import { Hint } from "./Hint";

export interface Level {
  id: string;
  secret: string;
  clue: string;
  hints: Hint[];
  hiddenSecret: string[];
  // failedGuesses: number;
  // isGuessCorrect: boolean;
  isLoading: boolean;
}
