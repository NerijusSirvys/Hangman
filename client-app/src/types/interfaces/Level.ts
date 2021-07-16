import hint from "../interfaces/Hint";

export interface Level {
  id: string;
  secret: string;
  clue: string;
  hints: hint[];
  hiddenSecret: string[];
  isLoading: boolean;
  starAwardForLetter: number;
  difficulty: string;
}
