import { AxiosResponse } from "axios";
import { agent } from "../../api/agent";
import { levelService } from "../../app/services/levelService";
import { playerService } from "../../app/services/playerService";
import { userSession } from "../../app/services/userSession";
import { game_isLoading } from "../../app/state/gameSlice";
import store from "../../app/store";
import { FormModel } from "../../interfaces/FormModel";
import { Login } from "../../interfaces/Login";

/**
 * Logs player in
 * @param values Username and password values from login form
 */
export const LoginPlayer = async (values: FormModel) => {
  store.dispatch(game_isLoading(true));
  await agent.accountService.loginAsync(values).then((response: AxiosResponse<Login>) => {
    playerService.loadPlayer(response.data.data);
    levelService.loadLevel(true);
    userSession.loginSession(response.data.token);
  });
};
