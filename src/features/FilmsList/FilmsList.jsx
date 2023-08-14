import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "./filmsListSlice";
import {
  Box,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const FilmsList = () => {
  const list = useSelector((state) => state.filmsList.list);
  console.log(list);

  const dispatch = useDispatch();

  let filmCardStyle = false;

  const handlePrevDetails = () => {
    filmCardStyle = true;
  };

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return (
    <Grid
      padding={"100px 20px"}
      gap={"50px"}
      // boxShadow={"0px 50px 30px -25px rgba(225, 89, 15, 0.85) inset"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      spacing={50}
      display={"flex"}
      sx={{
        background: "rgb(16, 14, 25)",
        width: "100%",
        height: "auto",
      }}
    >
      <Header />
      {list.map((item) => (
        <Link to={"/details/"}>
          <Paper
            elevation={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "300px",
              height: "500px",
              backgroundColor: "#232323",
              color: "#fff",
              fontFamily: "Oswald",
            }}
          >
            {filmCardStyle === true ? (
              <Paper
                sx={{
                  zIndex: "10",
                  transition: "0.5s",
                  opacity: 0.3,
                  id: "cardStyle",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "300px",
                  height: "500px",
                  backgroundColor: "red",
                  fontFamily: "Oswald",
                }}
              ></Paper>
            ) : (
              <Paper onMouseOver={handlePrevDetails}>
                <CardMedia
                  sx={{
                    zIndex: "5",
                    ":hover": {
                      opacity: "0.8",
                      transition: "0.7s",
                    },
                  }}
                  component="img"
                  height="500px"
                  width="300px"
                  image={item.posterUrl}
                  alt={item.nameRu}
                />
              </Paper>
            )}
          </Paper>
        </Link>
      ))}
    </Grid>
  );
};

export default FilmsList;
