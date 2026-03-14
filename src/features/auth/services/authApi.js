import apiClient from "../../../services/apiClient";

export const loginRequest = (credentials) => {

  return apiClient.post("/auth/login", credentials);

};