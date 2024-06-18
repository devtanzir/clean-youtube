import { CssBaseline } from "@mui/material";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlaylists";
import { Home, NotFound, Player } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { playlists, error, loading, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar getPlaylist={getPlaylistById} />
      <Routes>
        <Route path="/" element={<Home playlistArray={playlistArray} />} />
        <Route
          path="/player/:playlistId"
          element={<Player playlists={playlists} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
