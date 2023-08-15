import { configureStore } from "@reduxjs/toolkit";
import FilmsListReduce from "./features/FilmsList/filmsListSlice";
import FilmDetailsReduce from "./features/FilmDetails/filmDetailsSlice";

const store = configureStore({
  reducer: {
    filmsList: FilmsListReduce,
    filmDetails: FilmDetailsReduce,
  },
});

export default store;
