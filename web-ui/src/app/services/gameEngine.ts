import { Level } from "../../interfaces/Level";
import {
  isLoading,
  processCorrectGuess,
  processFailedGuess,
  resetFailedGuesses,
} from "../state/gameSlice";
import { updateMask } from "../state/levelSlice";
import { addStars } from "../state/playerSlice";
import store from "../store";
import { accountService } from "./accountService";
import { levelService } from "./levelService";
import { playerService } from "./playerService";

// disables keyboard key once it used
const disableKey = (e: any) => {
  if (e.target.parentNode.classList.contains("key-letter")) {
    e.target.parentNode.classList.add("used");
  } else {
    e.target.classList.add("used");
  }
};

// Checks if guess is correct and returns true if it is or false if not
const verifyGuess = (
  secret: string,
  maskedSecret: string[],
  letter: string
): boolean => {
  return (
    secret.toUpperCase().includes(letter) &&
    !maskedSecret.toString().toUpperCase().includes(letter)
  );
};

// changes mask into a letter and returns counter of how many letters was revealed
const updatedMaskedSecret = (letter: string, secret: string): number => {
  let correctLetters = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i].toUpperCase() === letter) {
      store.dispatch(updateMask(i));
      correctLetters++;
    }
  }

  return correctLetters;
};

const processGuess = (letter: string, level: Level) => {
  // increment failed guess counter if guess is not correct
  if (verifyGuess(level.secret, level.secretMask, letter) === false) {
    return store.dispatch(processFailedGuess());
  }

  const correctLetters = updatedMaskedSecret(letter, level.secret);

  store.dispatch(processCorrectGuess(correctLetters));
  store.dispatch(addStars(level.starReward));
};

const purchaseHint = (hintId: string, hintPrice: number) => {
  levelService.showHint(hintId);
  playerService.spendStars(hintPrice);
};

const loadLevel = () => {
  store.dispatch(isLoading(true));
  levelService.loadNewLevel().then(() => {
    store.dispatch(resetFailedGuesses());
    store.dispatch(isLoading(false));
  });
};

const processLevelComplete = (
  starReward: number,
  gameScoreReward: number,
  levelId: string
) => {
  playerService.addStarsToPlayer(starReward);
  playerService.addGamescoreToPlayer(gameScoreReward);
  playerService.addCompleteLevel(levelId);
};

// load player and level and once both are loaded, display to the user
const reLogPlayer = async () => {
  await Promise.all([
    accountService.relogPlayer(),
    levelService.loadNewLevel(),
  ]).then(() => {
    store.dispatch(isLoading(false));
  });
};

export const gameEngine = {
  disableKey,
  processGuess,
  purchaseHint,
  processLevelComplete,
  loadLevel,
  reLogPlayer,
};
