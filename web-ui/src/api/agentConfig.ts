import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "..";
import { routes } from "../app/routes/routes";
import { errorState } from "../app/state/stateService";
import { Level } from "../interfaces/Level";
import { Player } from "../interfaces/Player";

// base api URL
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// configure axios to send auth toked with every request
axios.interceptors.request.use((config) => {
  const token = window.sessionStorage.getItem("token");

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(
  (response: AxiosResponse<Level | Player>) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
      case 400:
        toast.dark(data.toString());
        break;
      case 401:
        toast.dark("unauthorised");
        break;
      case 404:
        toast.dark("not found");
        break;
      case 500:
        errorState.set(data);
        history.push(routes.serverError);
        break;
    }

    return Promise.reject(error);
  }
);

const headers = {
  headers: {
    "content-type": "application/json",
  },
};

export const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body, headers).then(responseBody),
};
