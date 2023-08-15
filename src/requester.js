import axios from "axios";

export const API_KEY = "be19ddf6-88e2-4a24-a611-28a1f1d3c721";
export const API_SEARCH = (search) =>
  `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${search}`;

const API = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/",
});

const OLD_API = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api/v2.1/films",
});

API.defaults.headers["X-API-KEY"] = API_KEY;

OLD_API.defaults.headers["X-API-KEY"] = API_KEY;

export default API;
