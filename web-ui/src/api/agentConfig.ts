import axios from "axios";

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

const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const request = {
  get: <T>(url: string) => axios.get<T>(url),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body, headers),
};
