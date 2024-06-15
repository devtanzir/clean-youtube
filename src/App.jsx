import { Container, CssBaseline, Grid } from "@mui/material";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlaylists";
import PlaylistCard from "./components/playlist-card-item";
import { CleaningServices } from "@mui/icons-material";

function App() {
  const { playlists, error, loading, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);
  return (
    <>
      <CssBaseline />
      <Container maxWidth={"lg"} sx={{ my: 16 }}>
        <Navbar getPlaylist={getPlaylistById} />
        {playlistArray.length > 0 && (
          <Grid container spacing={4}>
            {playlistArray.map((item) => (
              <Grid item xs={12} md={6} lg={4}>
                <PlaylistCard
                  key={item.playlistId}
                  playlistThumbnail={item.playlistThumbnails}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default App;
