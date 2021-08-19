import { AxiosResponse } from "axios";
import { agent } from "../../api/agent";
import { levelService } from "../../app/services/levelService";
import { userSession } from "../../app/services/userSession";
import { game_isLoading } from "../../app/state/gameSlice";
import { player_loadPlayer } from "../../app/state/playerSlice";
import store from "../../app/store";
import { Login } from "../../interfaces/Login";
import { RegistrationFormModel } from "../../interfaces/RegistrationFormModel";

export const RegisterPlayer = async (values: RegistrationFormModel) => {
  await agent.accountService.registerAsync(values).then((response: AxiosResponse<Login>) => {
    store.dispatch(game_isLoading(true));
    store.dispatch(player_loadPlayer(response.data.data));
    levelService.loadLevel(true);
    userSession.loginSession(response.data.token);
  });
};
