import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { history } from "..";
import { routes } from "../app/routes/routes";
import { error_setError } from "../app/state/errorSlice";
import store from "../app/store";

// base api URL
axios.defaults.baseURL = "https://localhost:5001/api/";

// configure axios to send auth toked with every request
axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("token");

  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(
  (response) => {
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
        store.dispatch(error_setError(data));
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
  get: <T>(url: string) => axios.get<T>(url),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body, headers),
};
