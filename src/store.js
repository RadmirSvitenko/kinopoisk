import { configureStore } from "@reduxjs/toolkit";
import FilmsListReduce from "./features/FilmsList/filmsListSlice";

const store = configureStore({
  reducer: {
    filmsList: FilmsListReduce,
  },
});

export default store;
