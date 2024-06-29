import { CssBaseline } from "@mui/material";
import { Favorite, Home, NotFound, Player, Playlist, Recent } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <ToastContainer autoClose={2000} theme="colored" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/playlist/:playlistId" element={<Playlist />} />
        <Route path="/:playlistId/player/:videoId" element={<Player />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
