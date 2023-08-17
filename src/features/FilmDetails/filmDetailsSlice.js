import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovieByIdAPI } from "./filmsDetailsAPI";

import API from "../../requester";

const initialState = {
  details: {},
  movieDetails: {},
  radmir: {},
  isLoading: true,
  error: {},
};

export const getFilmDetails = createAsyncThunk(
  "filmDetals/getFilm",
  async (id) => {
    const response = await API.get(`api/v2.2/films/${id}`);
    return response.data;
  }
);

export const getMovieById = createAsyncThunk(
  "filmDetals/getMovie",
  getMovieByIdAPI
);

const filmsDetailsSlice = createSlice({
  name: "filmDetails",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.counter += 1;
    // },
    // decrement: (state) => {
    //   state.counter -= 1;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilmDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilmDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.details = action.payload;
    });
    builder.addCase(getFilmDetails.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });

    builder.addCase(getMovieById.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getMovieById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movieDetails = action.payload;
    });
  },
});

export default filmsDetailsSlice.reducer;
