export interface Level {
  id: string;
  secret: string;
  clue: string;
  hints: [];
  hiddenSecret: string[];
  failedGuesses: number;
  isGuessCorrect: boolean;
}
