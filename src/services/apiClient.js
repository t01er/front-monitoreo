import axios from "axios";
import { API_URL } from "../config/env";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {

    const backendError = error.response?.data;

    if (backendError && store) {

      store.dispatch({
        type: "error/setError",
        payload: backendError
      });

    }

    return Promise.reject(error);
  }
);

export default apiClient;