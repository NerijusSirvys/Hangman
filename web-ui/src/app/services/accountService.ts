import { agent } from "../../api/agent";
import { FormModel } from "../../interfaces/FormModel";
import { loadPlayer } from "../state/playerSlice";
import store from "../store";
import { userSession } from "./userSession";

const loginPlayerAsync = async (body: FormModel) => {
  const loginResponse = (await agent.accountService.LoginAsync(body)).data;

  window.localStorage.setItem("token", loginResponse.token);

  store.dispatch(loadPlayer(loginResponse.data));

  userSession.loginSession();
};

const relogPlayer = async () => {
  userSession.loginSession();

  const loginResponse = (await agent.accountService.getCurrentPlayerAsync())
    .data;

  store.dispatch(loadPlayer(loginResponse));
};

export const accountService = {
  loginPlayer: loginPlayerAsync,
  relogPlayer: relogPlayer,
};
