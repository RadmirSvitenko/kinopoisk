import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Card = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "300px",
  height: "500px",
  backgroundColor: "#232323",
  color: "#fff",
  fontFamily: "Oswald",
}));
