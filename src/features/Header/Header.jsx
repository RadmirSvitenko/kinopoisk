import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";

const Header = () => {
  const SeatchFilmsWithCatalog = () => {};

  const ClearFilmsWithCatalog = () => {};

  return (
    <AppBar
      sx={{
        height: "100px",
        background: "transparent",
        color: "#fff",
        marginBottom: "100px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100px",
        }}
      >
        <Typography
          variant="h4"
          letterSpacing={"2px"}
          textTransform={"uppercase"}
        >
          Logo
        </Typography>
        <TextField
          variant="filled"
          sx={{
            width: "300px",
            fontSize: "50px",
          }}
          // label="Найти подходящий фильм"
          letterSpacing="3px"
          color="#fff"
        />
        <Button>Searh</Button>
        <Button>Clear</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
