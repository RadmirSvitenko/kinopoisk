import styled from "@emotion/styled";
import { Box, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },

    secondary: {
      main: "#FFD700",
    },

    blackColor: {
      main: "#000",
    },
  },

  fonts: {
    Oswald: {
      main: "Oswald",
    },
  },
});
