import { AxiosResponse } from "axios";
import { agent } from "../../api/agent";
import { FormModel } from "../../interfaces/FormModel";
import { Login } from "../../interfaces/Login";
import { Player } from "../../interfaces/Player";
import { loadPlayer } from "../state/playerSlice";
import store from "../store";
import { userSession } from "./userSession";

const loginPlayerAsync = async (body: FormModel) => {
  await agent.accountService
    .LoginAsync(body)
    .then((response: AxiosResponse<Login>) => {
      window.localStorage.setItem("token", response.data.token);
      store.dispatch(loadPlayer(response.data.data));
      userSession.loginSession();
    });
};

const relogPlayer = async () => {
  userSession.loginSession();

  await agent.accountService
    .getCurrentPlayerAsync()
    .then((response: AxiosResponse<Player>) => {
      store.dispatch(loadPlayer(response.data));
    });
};

export const accountService = {
  loginPlayer: loginPlayerAsync,
  relogPlayer: relogPlayer,
};
