import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmsList from "./features/FilmsList/FilmsList";
import FilmDetails from "./features/FilmDetails/FilmDetails";
import Header from "./features/Header/Header";
import { Switch } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FilmsList />} />
          <Route path="/details/" element={<FilmDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
