import { createRoot } from "react-dom/client";
import SearchScreen from "./containers/SearchScreen";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <CssBaseline enableColorScheme />

      <Routes>
        <Route path="/" element={<SearchScreen />} />
      </Routes>
    </>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
