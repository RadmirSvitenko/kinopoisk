import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilmDetails, getMovieById } from "./filmDetailsSlice";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { Grid, Card, CardMedia } from "@mui/material";

const FilmDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const details = useSelector((state) => state.filmDetails.details);
  console.log("details: ", details);
  const movieDetails = useSelector((state) => state.filmDetails.movieDetails);
  console.log("movieDetails: ", movieDetails);
  const isLoading = useSelector((state) => state.filmDetails.isLoading);
  console.log("isLoading: ", isLoading);

  const [isMovie, setIsMovie] = useState(false);

  useEffect(() => {
    dispatch(getFilmDetails(params.id));
  }, [dispatch, params.id]);

  const handleMovie = async () => {
    await dispatch(getMovieById(details.kinopoiskId));
    setIsMovie(true);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"40px"}
      width={"100%"}
      flexWrap={"wrap"}
      height={"auto"}
      sx={{
        background: "rgb(16, 14, 25)",
        boxShadow: "0px 42px 31px 0px rgba(255, 0, 0, 0.43) inset",
      }}
    >
      <Grid>
        <Card
          sx={{
            height: "100%",
            borderRadius: "40px",
            width: "100%",
          }}
        >
          <CardMedia
            sx={{
              position: "absolute",
              width: "200px",
              height: "300px",
              left: "45%",
              zIndex: "1",
              top: "80%",
              borderRadius: "20px",
            }}
            component="img"
            alt="details.nameRu"
            height="100%"
            image={details.posterUrlPreview}
          />
          <CardMedia
            component="img"
            alt="details.nameRu"
            height="100%"
            image={details.posterUrl}
            sx={{
              transition: "0.7s",
              "&:hover": {
                position: "relative",
                scale: "1.1",
                transition: "0.7s",
              },
            }}
          />
        </Card>
      </Grid>
      <Grid
        sx={{
          width: "40%",
          height: "auto",
        }}
      >
        <Paper
          elevation={"20"}
          sx={{
            padding: "30px",
            background: "transparent",
            backdropFilter: "blur(5px)",
            color: "#ff9800",
            fontFamily: "Oswald",
          }}
        >
          <Box
            marginBottom={"30px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Typography letterSpacing={"4px"} variant="h3" fontFamily>
              {details.nameRu}
            </Typography>
            <Typography color={"primary"} letterSpacing={"4px"} variant="h4">
              {details.nameOriginal}
            </Typography>
          </Box>

          <Box textAlign={"center"} marginBottom={"30px"}>
            <Typography>Жанры: </Typography>
            <br />
            {details.genres?.map((item) => (
              <div>
                <Typography key={item.genre}>{item.genre}</Typography>
              </div>
            ))}
          </Box>

          <Box textAlign={"center"} marginBottom={"30px"}>
            <Typography>Страна производитель: </Typography>
            <br />
            {details.countries?.map((item) => (
              <div>
                <Typography key={item.country}>{item.country}</Typography>
              </div>
            ))}
          </Box>

          <Box marginBottom={"30px"}>
            <Typography>
              Количество просмотров: {details.ratingAwaitCount}
            </Typography>
            <Typography>
              Количество голосов в KINOPOISK.RU:{" "}
              {details.ratingKinopoiskVoteCount}
            </Typography>
          </Box>

          <Box marginBottom={"30px"}>
            <Typography>
              Добавлен: {details.lastSync.substring(0, 10)}
            </Typography>
            <Typography>Год выпуска: {details.year}</Typography>
            <Typography>
              Продолжительность фильма: {details.filmLength} минут
            </Typography>
          </Box>

          <Box marginBottom={"30px"}>
            <Typography align="center" letterSpacing={"2px"} fontWeight={"800"}>
              ОПИСАНИЕ
            </Typography>
            <br />
            <Typography>{details.description}</Typography>
          </Box>
        </Paper>
      </Grid>
      <Box width={"100%"}>
        <button onClick={handleMovie}>Получить фильм</button>
        {isMovie ? (
          <div>{movieDetails.items[0].url}</div>
        ) : (
          console.log("Error!")
        )}
      </Box>
    </Grid>
  );
};

FilmDetails.propTypes = {};

export default FilmDetails;
