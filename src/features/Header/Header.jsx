import {
  AppBar,
  Button,
  Grid,
  Box,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../requester";
import { Search } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";

const Header = () => {
  const [input, setInput] = useState("");

  const seatchFilmsWithCatalog = (event) => {
    setInput(event.target.value);
  };

  const clearFilmsWithCatalog = () => {};

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
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "600px",
          }}
        >
          <TextField
            color={"secondary"}
            sx={{
              borderColor: "1px solid primary",
              "& .MuiInputBase-root": {
                color: "secondary.main",
              },
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <Button variant="contained" color="secondary">
            Searh
          </Button>
          <Button variant="outlined" color="secondary">
            Clear
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

/* 

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data.products);
  };

  const searchProduct = document.getElementById("search_product");

  const searchProductsCatalog = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://dummyjson.com/products/search?q=" + searchProduct.value
    );
    const { products } = await response.json();
    setProducts(products);
  };

  const clearProductsCatalog = () => {
    searchProduct.value = "";
    getProducts();
  };
*/
