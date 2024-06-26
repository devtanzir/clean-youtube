import { Container, Grid, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import shortid from "shortid";
import { PlaylistCard } from "../components";

const Home = () => {
  const { data } = useStoreState((state) => state.playlists);
  const playlistArray = Object.values(data);
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
        <Typography variant="h2" align="center">
          No Data Found
        </Typography>
      )}
    </Container>
  );
};

export default Home;
