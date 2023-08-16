import { Clear, Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  alpha,
  IconButton,
} from "@mui/material";
import { theme } from "../../theme";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilms, getFilmsBySearch } from "../FilmsList/filmsListSlice";

const Header = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClearChange = () => {
    dispatch(getFilms());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(getFilmsBySearch(search));
  };

  return (
    <AppBar
      sx={{
        background: "transparent",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
        }}
      >
        <Box>
          <Typography
            color={"secondary"}
            variant="h4"
            letterSpacing={"2px"}
            textTransform={"uppercase"}
          >
            KINOPOISK
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              value={search}
              onChange={handleSearchChange}
              color={"secondary"}
              sx={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                left: "45%",
                top: "50%",
                backgroundColor: alpha(theme.palette.common.white, 0.15),
                borderColor: "1px solid primary",
                "& .MuiInputBase-root": {
                  color: "secondary.main",
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.common.white, 0.2),
                    transition: "0.8s",
                  },
                },
              }}
              id="outlined-basic"
              label="Поиск по каталогу"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton type="submit">
                      <Search color="secondary" />
                    </IconButton>
                    <IconButton type="button" onClick={handleClearChange}>
                      <Clear color="secondary" />
                    </IconButton>
                  </InputAdornment>
                ),
                color: "secondary",
                style: {
                  border: "1px solid orange",
                },
              }}
            />
          </form>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
