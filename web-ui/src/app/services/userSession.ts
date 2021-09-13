import jwtDecode, { JwtPayload } from "jwt-decode";
import { sessionState } from "../state/stateService";

export const userSession = {
  token: sessionStorage.getItem("token"),

  isTokenExpired: () => {
    if (userSession.token === null) {
      return true;
    }

    console.log(userSession.token);
    const decodedToken = jwtDecode<JwtPayload>(userSession.token);

    if (decodedToken.exp) {
      return decodedToken.exp * 1000 < Date.now();
    }
    return true;
  },

  loginSession: (token: string) => {
    window.sessionStorage.setItem("token", token);

    sessionState.login();
  },

  removeToken: () => window.sessionStorage.clear(),
};
