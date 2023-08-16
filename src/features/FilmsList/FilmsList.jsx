import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "./filmsListSlice";
import { Box, CircularProgress, Grid } from "@mui/material";
import FilmCard from "../../components/FilmCard/FilmCard";
import Header from "../Header/Header";
import theme from "../../theme";

const FilmsList = () => {
  const filmList = useSelector((state) => state.filmsList.list);
  const list = filmList;
  console.log("list: ", list);

  const isLoading = useSelector((state) => state.filmsList.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid
      container
      sx={{
        width: "100%",
        padding: "150px 20px",
        justifyContent: "space-evenly",
        background: "rgb(16, 14, 25)",
        boxShadow: "0px 42px 31px 0px rgba(255, 0, 0, 0.43) inset",
        gap: "50px",
      }}
    >
      <Header />
      {list?.map((item) => (
        <Grid key={item.filmId} item xs={12} sm={3} md={3}>
          <FilmCard film={item} />
        </Grid>
      ))}
    </Grid>
  );
};

FilmsList.propTypes = {};

export default FilmsList;
