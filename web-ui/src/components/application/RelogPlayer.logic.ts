import { AxiosResponse } from "axios";
import { agent } from "../../api/agent";
import { levelService } from "../../app/services/levelService";
import { playerService } from "../../app/services/playerService";
import { game_isLoading } from "../../app/state/gameSlice";
import store from "../../app/store";
import { Player } from "../../interfaces/Player";

/**
 * Automaticaly logs player in if browser is refreshes
 */
export const RelogPlayer = () => {
  store.dispatch(game_isLoading(true));
  agent.accountService.getCurrentPlayerAsync().then((response: AxiosResponse<Player>) => {
    playerService.loadPlayer(response.data);
    levelService.loadLevel(true);
  });
};
