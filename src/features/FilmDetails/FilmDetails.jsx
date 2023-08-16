import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilmDetails } from "./filmDetailsSlice";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { Grid, Card, CardMedia } from "@mui/material";
import theme from "../../theme";

const FilmDetails = () => {
  const details = useSelector((state) => state.filmDetails.details);
  console.log("details: ", details);

  const params = useParams();
  console.log("params: ", params);
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.filmsList.isLoading);

  const lastSync = details.lastSync;
  const сutLastSync = String(lastSync).substring(0, 10);
  console.log("lastSync: ", lastSync);

  useEffect(() => {
    dispatch(getFilmDetails(params.id));
  }, [dispatch, params.id]);

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
          width: "500px",
          height: "600px",
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
            <Typography letterSpacing={"4px"} variant="h3">
              {details.nameOriginal}
            </Typography>
          </Box>

          {/* <Box marginBottom={"30px"}>
            {details.genres?.map((item) => (
              <div>
                <Typography key={item.kinopoiskId}>{item}</Typography>
              </div>
            ))}
            {details.countries?.map((item) => (
              <div>
                <Typography key={item.kinopoiskId}>{item}</Typography>
              </div>
            ))}
          </Box> */}

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
            <Typography>Добавлен: {сutLastSync}</Typography>
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

          {/* <table>
            <tr>
              <th>Название фильма: </th>
              <th>{details.nameRu}</th>
            </tr>
            <tr>
              <th>Оригинальное название: </th>
              <th>{details.nameOriginal}</th>
            </tr>
            <tr>
              <th>Количество просмотров: </th>
              <th>{details.ratingAwaitCount}</th>
            </tr>
            <tr>
              <th>Количество голосов на KINOPOISK.RU: </th>
              <th>{details.ratingKinopoiskVoteCount}</th>
            </tr>
            <tr>
              <th>Страна выпуска: </th>
              <th>{details.nameRu}</th>
            </tr>
            <tr>
              <th>Добавлен: </th>
              <th>{lastSync}</th>
            </tr>
            <tr>
              <th>Год выпуска: </th>
              <th>{details.year}</th>
            </tr>
            <tr>
              <th>Продолжительность фильма: </th>
              <th>{details.filmLength} мин.</th>
            </tr>
          </table> */}
        </Paper>
      </Grid>
    </Grid>
  );
};

FilmDetails.propTypes = {};

export default FilmDetails;
