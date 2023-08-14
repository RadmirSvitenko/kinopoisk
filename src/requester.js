import axios from "axios";

export const API_KEY = "be19ddf6-88e2-4a24-a611-28a1f1d3c721";

const API = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/",
});

API.defaults.headers["X-API-KEY"] = API_KEY;

export default API;
