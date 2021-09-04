import { history } from "../..";
import { agent } from "../../api/agent";
import { CompleteLevelModel } from "../../interfaces/CompleteLevelModel";
import { FormModel } from "../../interfaces/FormModel";
import { RegistrationFormModel } from "../../interfaces/RegistrationFormModel";
import { routes } from "../routes/routes";
import { gameState, levelState, playerSate, sessionState } from "../state/stateService";
import store from "../store";
import { levelService } from "./levelService";
import { playerService } from "./playerService";
import { userSession } from "./userSession";

const GetLevelCompletionModel = () => {
  const gameScoreReward = store.getState().level.gameScoreReward;
  const stars = store.getState().player.stars;
  const levelId = store.getState().level.id; // push updated amount of player stars to API
  const data: CompleteLevelModel = {
    stars: stars,
    gameScore: gameScoreReward,
    levelId: levelId,
  };

  return data;
};

const verifyGuess = (secret: string, maskedSecret: string[], letter: string): boolean => {
  return secret.toUpperCase().includes(letter) && !maskedSecret.toString().toUpperCase().includes(letter);
};

const updatedMaskedSecret = (letter: string, secret: string): number => {
  // correct letter counter in case word have more than one the same letter
  // in that case all letters will be included
  let correctLetters = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i].toUpperCase() === letter) {
      levelState.updateMask(i);
      correctLetters++;
    }
  }

  return correctLetters;
};

export const engine = {
  loginPlayer: (values: FormModel) => {
    agent.accountService.loginAsync(values).then((response) => {
      playerSate.loadPlayer(response.data);
      userSession.loginSession(response.token);
      levelService.loadLevel().then(() => {
        history.push(routes.gameBoard);
      });
    });
  },

  returnPlayer: () => {
    playerService.loadPlayer().then(() => {
      levelService.loadLevel();
    });
  },

  logOutPlayer: () => {
    userSession.removeToken();
    sessionState.logout();
    history.push("/");
  },

  showHint: (id: string, price: number) => {
    levelService.showHint(id).then(() => {
      playerService.removeStars(price);
    });
  },

  processLevelCompletion: () => {
    const levelCompletionData = GetLevelCompletionModel();
    playerService.completeLevel(levelCompletionData);
  },

  registerPlayer: (values: RegistrationFormModel) => {
    agent.accountService.registerAsync(values).then((response) => {
      gameState.isLoading(true);
      playerSate.loadPlayer(response.data);
      levelService.loadLevel();
      userSession.loginSession(response.token);
      history.push(routes.gameBoard);
    });
  },

  disableKey: (e: any) => {
    gameState.disableKey(e.target.innerText);
  },

  processGuess: (letter: string) => {
    const level = store.getState().level;
    // increment failed guess counter if guess is not correct
    if (verifyGuess(level.secret, level.secretMask, letter) === false) {
      gameState.processFailedGuess();
    } else {
      const correctLetters = updatedMaskedSecret(letter, level.secret);
      gameState.processCorrectGuess(correctLetters);
      playerSate.addStars(level.starReward);
    }
  },

  getLeaderboard: async () => {
    return await agent.gameService.getLeaderboardData();
  },

  restart: () => {
    gameState.reset();
    levelService.restartLevel();
  },

  loadNewLevel: () => {
    gameState.isLoading(true);
    levelService.loadLevel();
  },
};
