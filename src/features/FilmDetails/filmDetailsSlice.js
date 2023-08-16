import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../requester";

const initialState = {
  details: {},
  radmir: {},
  isLoading: false,
  error: {},
};

export const getFilmDetails = createAsyncThunk(
  "filmDetals/getFilm",
  async (id) => {
    const response = await API.get(`api/v2.2/films/${id}`);
    // {
    //   params: { type: "TOP_100_POPULAR_FILMS" },
    // });
    return response.data;
  }
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
  },
});

export default filmsDetailsSlice.reducer;
