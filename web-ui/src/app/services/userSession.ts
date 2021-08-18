import jwtDecode, { JwtPayload } from "jwt-decode";
import { session_login } from "../state/sessionSlice";
import store from "../store";

/**
 * Check if token is not expired
 * @returns true if token is expired, false if not
 */
const isTokenExpired = () => {
  if (userSession.token === null) {
    return true;
  }

  const decodedToken = jwtDecode<JwtPayload>(userSession.token);

  if (decodedToken.exp) {
    return decodedToken.exp * 1000 < Date.now();
  }

  return true;
};

/**
 * Stores authentication token to the local storage
 * @param token token to be stored
 */
const setToken = (token: string) => {
  window.localStorage.setItem("token", token);
};

/**
 * Removes token from local storage
 */
const removeToken = () => {
  window.localStorage.clear();
};

/**
 * Saves token to local storage and updates global state to logged in
 * @param token authorization token
 */
const loginSession = (token: string) => {
  setToken(token);
  store.dispatch(session_login());
};

export const userSession = {
  token: localStorage.getItem("token"),
  isTokenExpired,
  removeToken,
  loginSession,
};
