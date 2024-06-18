import { Container, Grid } from "@mui/material";
import PlaylistCard from "../components/playlist-card-item";

const Home = ({ playlistArray }) => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container spacing={4}>
          {playlistArray.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.playlistId}>
              <PlaylistCard
                playlistId={item.playlistId}
                playlistThumbnail={item.playlistThumbnails}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
