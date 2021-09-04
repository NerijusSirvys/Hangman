import { Level } from "../../interfaces/Level";
import { Player } from "../../interfaces/Player";
import { ServerError } from "../../interfaces/ServerError";
import store from "../store";
import { setError } from "./errorSlice";
import { reset, isLoading, resetFailedGuesses, processFailedGuess, processCorrectGuess, disableKey } from "./gameSlice";
import { showHint, loadLevel, updateMask } from "./levelSlice";
import { addStars, loadPlayer, removeStars, processLevelCompletion } from "./playerSlice";
import { login, logout } from "./sessionSlice";

export const gameState = {
  reset: () => store.dispatch(reset()),
  isLoading: (loading: boolean) => store.dispatch(isLoading(loading)),
  resetFailedGuesses: () => store.dispatch(resetFailedGuesses()),
  processFailedGuess: () => store.dispatch(processFailedGuess()),
  processCorrectGuess: (guesses: number) => store.dispatch(processCorrectGuess(guesses)),
  disableKey: (key: string) => store.dispatch(disableKey(key)),
};

export const errorState = {
  set: (error: ServerError) => store.dispatch(setError(error)),
};

export const sessionState = {
  login: () => store.dispatch(login()),
  logout: () => store.dispatch(logout()),
};

export const playerSate = {
  addStars: (stars: number) => store.dispatch(addStars(stars)),
  loadPlayer: (player: Player) => store.dispatch(loadPlayer(player)),
  removeStars: (stars: number) => store.dispatch(removeStars(stars)),
  processLevelCompletion: (gameScore: number) => store.dispatch(processLevelCompletion(gameScore)),
};

export const levelState = {
  showHint: (id: string) => store.dispatch(showHint(id)),
  loadLevel: (level: Level) => store.dispatch(loadLevel(level)),
  updateMask: (index: number) => store.dispatch(updateMask(index)),
};
