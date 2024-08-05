import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const api = "http://localhost:3000/";
    const token = localStorage.getItem("gariobald");

    if (token) config.headers.Authorization = `gariobald ${token}`;

    config.url = api + config.url;

    return config;
  },
  (error) => Promise.reject(error),
);

export default axios;
