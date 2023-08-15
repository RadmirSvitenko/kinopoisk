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
      alignItems={"flex-start"}
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
                zIndex: 100,
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
          sx={{
            background: "#FFD700",
            backdropFilter: "blur(5)",
            fontFamily: "Oswald",
          }}
        >
          {/* {details.countries.map((item) => (
            <Typography>{details.item}</Typography>
          ))} */}
          <Box>
            <Typography variant="h3">{details.nameRu}</Typography>
            <Typography variant="h3">{details.nameOriginal}</Typography>
          </Box>

          <Box>
            <Typography>
              Количество просмотров: {details.ratingAwaitCount}
            </Typography>
            <Typography>
              Количество голосов в KINOPOISK.RU: {details.description}
            </Typography>
          </Box>

          <Box>
            <Typography>Добавлен: {details.lastSync}</Typography>
            <Typography>Год выпуска: {details.year}</Typography>
          </Box>

          <Box>
            <Typography>Описание: </Typography>
            <br />
            <Typography>{details.description}</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

FilmDetails.propTypes = {};

export default FilmDetails;
