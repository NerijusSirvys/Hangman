import { AxiosResponse } from "axios";
import { agent } from "../../api/agent";
import { FormModel } from "../../interfaces/FormModel";
import { Level } from "../../interfaces/Level";
import { Login } from "../../interfaces/Login";
import { Player } from "../../interfaces/Player";
import {
  game_isLoading,
  game_processCorrectGuess,
  game_processFailedGuess,
} from "../state/gameSlice";
import { level_loadLevel, level_showHint, level_updateMask } from "../state/levelSlice";
import {
  player_addScore,
  player_addStars,
  player_incrementCompleteLevel,
  player_loadPlayer,
  player_removeStars,
} from "../state/playerSlice";
import { session_login } from "../state/sessionSlice";
import store from "../store";

import { userSession } from "./userSession";

/**
 * Login player automaticaly if auth token is available and not expired
 * @param isLoggedIn state showing if player is already logged in
 */
const reLogPlayer = async (isLoggedIn: boolean) => {
  if (!isLoggedIn && !userSession.isTokenExpired()) {
    store.dispatch(session_login());

    // load player and load level once player loaded successfully
    await agent.accountService.getCurrentPlayerAsync().then((response: AxiosResponse<Player>) => {
      store.dispatch(player_loadPlayer(response.data));
      loadLevel();
    });
  }
};

/**
 * Login player and set global state
 * @param values data from login form
 */
const loginPlayer = async (values: FormModel) => {
  await agent.accountService.LoginAsync(values).then((response: AxiosResponse<Login>) => {
    window.localStorage.setItem("token", response.data.token);
    store.dispatch(player_loadPlayer(response.data.data));
    store.dispatch(session_login());

    loadLevel();
  });
};

/**
 * Exchange player stars into a hint for the riddle
 * @param id id of the hint to be showed
 * @param price hint price in stars
 */
const showHint = async (id: string, price: number) => {
  await agent.levelService.showHint(id).then(() => {
    store.dispatch(level_showHint(id));
  });

  store.dispatch(player_removeStars(price));
  agent.playerService.removeStars(price);
};

/**
 * Disables keyboad key once it is used
 * @param e mouse click event
 */
const disableKey = (e: any) => {
  // in case parent node was clicked instead of actual letter
  // add class to the letter
  if (e.target.parentNode.classList.contains("key-letter")) {
    e.target.parentNode.classList.add("used");
  } else {
    e.target.classList.add("used");
  }
};

/**
 * Process letter that player guessed
 * If guess failed: increments failed guess counter by one
 * If guess success: reveal a letter, award stars and increments correct guess counter
 * @param letter guessed letter
 * @param level currently played level object
 */
const processGuess = (letter: string, level: Level) => {
  // increment failed guess counter if guess is not correct
  if (verifyGuess(level.secret, level.secretMask, letter) === false) {
    store.dispatch(game_processFailedGuess());
  }

  const correctLetters = updatedMaskedSecret(letter, level.secret);

  store.dispatch(game_processCorrectGuess(correctLetters));
  store.dispatch(player_addStars(level.starReward));
};

/**
 * Load a new level
 */
const loadNewLevel = async () => {
  store.dispatch(game_isLoading(true));
  loadLevel();
};

/**
 * Process level completion
 * @param starReward updated player star amount
 * @param gameScoreReward game score reward that level offers
 * @param id completed level id
 */
const processLevelComplete = (starReward: number, gameScoreReward: number, id: string) => {
  // push updated amount of player stars to API
  agent.playerService.addStarsAsync(starReward);

  // push updated amount of game score to API
  agent.playerService.addGameScoreAsync(gameScoreReward);

  // set player state new score
  store.dispatch(player_addScore(gameScoreReward));

  // push completed level id to the API to be saved
  agent.playerService.addCompleteLevelsAsync(id);

  // set player complete level counter to +1
  store.dispatch(player_incrementCompleteLevel());
};

//----------------------------------------
// private functions
//----------------------------------------

/**
 * Load level
 */
const loadLevel = () => {
  agent.levelService.getLevelAsync().then((response: AxiosResponse<Level>) => {
    store.dispatch(game_isLoading(true));
    store.dispatch(level_loadLevel(response.data));
    store.dispatch(game_isLoading(false));
  });
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

/**
 * Checks if player guess was successfull
 * @param secret secret word that player need to guess
 * @param maskedSecret hidden secret word
 * @param letter guessed letter
 * @returns true if guess was successfull, false if not
 */
const verifyGuess = (secret: string, maskedSecret: string[], letter: string): boolean => {
  return (
    secret.toUpperCase().includes(letter) && !maskedSecret.toString().toUpperCase().includes(letter)
  );
};

export const gameEngine = {
  disableKey,
  processGuess,
  showHint,
  processLevelComplete,
  loadNewLevel,
  reLogPlayer,
  loginPlayer,
};
