import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Content, MyRating } from "./filmCardStyle";
import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

const FilmCard = ({ film }) => {
  const navigate = useNavigate();

  const toDetails = () => {
    navigate(`/films/${film.filmId}`);
  };

  return (
    <Card
      onClick={toDetails}
      sx={{
        position: "relative",
        height: "450px",
        width: "360px",
      }}
    >
      <CardMedia
        sx={{ position: "absolute", zIndex: "1" }}
        component="img"
        alt="green iguana"
        height="450px"
        image={film.posterUrlPreview}
      />
      <Content>
        <Typography variant="h4">{film.nameRu}</Typography>
        <Box>
          {film.genres.map((item) => (
            <Typography key={item.genre} color="white" variant="overline">
              {item.genre}{" "}
            </Typography>
          ))}
        </Box>
        <Typography>{film.year}</Typography>
        {film.rating && (
          <MyRating
            name="rating"
            value={
              film.rating.includes("%")
                ? parseInt(film.rating) / 20
                : parseInt(film.rating) / 2
            }
            readOnly
          />
        )}
      </Content>
    </Card>
  );
};

FilmCard.propTypes = {};

export default FilmCard;
