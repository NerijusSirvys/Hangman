import { game_processCorrectGuess, game_processFailedGuess } from "../../app/state/gameSlice";
import { level_updateMask } from "../../app/state/levelSlice";
import { player_addStars } from "../../app/state/playerSlice";
import store from "../../app/store";

/**
 * Process letter that player guessed
 * If guess failed: increments failed guess counter by one
 * If guess success: reveal a letter, award stars and increments correct guess counter
 * @param letter guessed letter
 */
export const ProcessGuess = (letter: string) => {
  const level = store.getState().level;

  // increment failed guess counter if guess is not correct
  if (verifyGuess(level.secret, level.secretMask, letter) === false) {
    store.dispatch(game_processFailedGuess());
  } else {
    const correctLetters = updatedMaskedSecret(letter, level.secret);

    store.dispatch(game_processCorrectGuess(correctLetters));
    store.dispatch(player_addStars(level.starReward));
  }
};

/**
 * Checks if player guess was successfull
 * @param secret secret word that player need to guess
 * @param maskedSecret hidden secret word
 * @param letter guessed letter
 * @returns true if guess was successfull, false if not
 */
const verifyGuess = (secret: string, maskedSecret: string[], letter: string): boolean => {
  return secret.toUpperCase().includes(letter) && !maskedSecret.toString().toUpperCase().includes(letter);
};

/**
 * Changes massked letter into actual letter
 * @param letter guessed letter
 * @param secret word that need to be guessed
 * @returns number of correctly guessed letters
 */
const updatedMaskedSecret = (letter: string, secret: string): number => {
  // correct letter counter in case word have more than one the same letter
  // in that case all letters will be included
  let correctLetters = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i].toUpperCase() === letter) {
      store.dispatch(level_updateMask(i));
      correctLetters++;
    }
  }

  return correctLetters;
};
