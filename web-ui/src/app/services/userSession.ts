import jwtDecode, { JwtPayload } from "jwt-decode";

/**
 * Check if token is not expired
 * @returns true if token is expired, false if not
 */
const isTokenExpired = () => {
  const token: string = window.localStorage.getItem("token") as string;

  if (token === null) {
    return true;
  }

  const decodedToken = jwtDecode<JwtPayload>(token);

  if (decodedToken.exp) {
    return decodedToken.exp * 1000 < Date.now();
  }
};

export const userSession = {
  isTokenExpired,
};
