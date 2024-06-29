import { Container, Grid, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import shortid from "shortid";
import { PlaylistCard } from "../components";
import NodataFound from "../animation/NodataFound";

const Home = () => {
  const state = useStoreState((state) => state);
  const playlistArray = Object.values(state.playlists.data);

  return (
    <Container maxWidth={"lg"} sx={{ mt: 16, mb: 2 }}>
      {playlistArray?.length > 0 ? (
        <Grid container spacing={4}>
          {playlistArray?.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={shortid.generate()}>
              <PlaylistCard
                playlistId={item.playlistId}
                playlistThumbnail={item.playlistThumbnails}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
                channelLogo={item.channelLogo}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <NodataFound title={"No Playlist Found !"} />
      )}
    </Container>
  );
};

export default Home;
