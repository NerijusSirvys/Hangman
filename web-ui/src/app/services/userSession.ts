import jwtDecode, { JwtPayload } from "jwt-decode";
import { sessionState } from "../state/stateService";

export const userSession = {
  token: localStorage.getItem("token"),

  isTokenExpired: () => {
    if (userSession.token === null) {
      return true;
    }
    const decodedToken = jwtDecode<JwtPayload>(userSession.token);
    if (decodedToken.exp) {
      return decodedToken.exp * 1000 < Date.now();
    }
    return true;
  },

  loginSession: (token: string) => {
    window.localStorage.setItem("token", token);
    sessionState.login();
  },

  removeToken: () => window.localStorage.clear(),
};
