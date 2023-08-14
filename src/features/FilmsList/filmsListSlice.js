import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../requester";

const initialState = {
  list: [],
  isLoading: false,
};

export const getFilms = createAsyncThunk("filmsList/getFilms", async () => {
  const response = await API.get("api/v2.2/films/top", {
    params: { type: "TOP_100_POPULAR_FILMS" },
  });
  return response.data;
});

const filmListSlice = createSlice({
  name: "filmsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilms.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFilms.fulfilled, (state, action) => {
      console.log("action: ", action);
      state.isLoading = false;
      state.list = action.payload.films;
      Object.values(state.list);
    });
  },
});
export const { increment, decrement } = filmListSlice;
export default filmListSlice.reducer;
