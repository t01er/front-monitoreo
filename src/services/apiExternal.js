import axios from "axios";

const apiExternal = axios.create({
  baseURL: "https://apisprod.puyu-iot.com/monitor-devices-iot/",
  headers: {
    "Content-Type": "application/json"
  }
});


apiExternal.interceptors.request.use((config) => {

  const token = localStorage.getItem("external_token");

  if (token) {
    config.headers["x-api-key"] = token;
  }

  return config;
});

export default apiExternal;