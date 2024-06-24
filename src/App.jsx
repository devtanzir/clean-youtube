import { CssBaseline } from "@mui/material";
import Navbar from "./components/navbar";
import { Favorite, Home, NotFound, Playlist, Recent } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/player/:playlistId" element={<Playlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
