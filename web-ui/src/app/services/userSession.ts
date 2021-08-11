import jwtDecode, { JwtPayload } from "jwt-decode";
import { login } from "../state/sessionSlice";
import store from "../store";

const checkTokenExpiration = () => {
  const token: string = window.localStorage.getItem("token") as string;

  if (token === null) {
    return true;
  }

  const decodedToken = jwtDecode<JwtPayload>(token);

  if (decodedToken.exp) {
    return decodedToken.exp * 1000 < Date.now();
  }
};

const loginSession = () => {
  store.dispatch(login());
};

export const userSession = {
  tokenExpired: checkTokenExpiration,
  loginSession: loginSession,
};
