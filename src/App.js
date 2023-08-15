import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store";
import FilmsList from "./features/FilmsList/FilmsList";
import FilmDetails from "./features/FilmDetails/FilmDetails";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FilmsList />} />
            <Route path="/films/:id" element={<FilmDetails />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
