import { Container, Grid, Typography } from "@mui/material";
import shortid from "shortid";
import PlaylistCard from "../components/playlist-card-item";
import { useStoreState } from "easy-peasy";

const Recent = () => {
  const state = useStoreState((state) => state);
  const recentList = Object.values(state.playlists.data)?.reduce(
    (acc, item) => {
      if (state.recent?.items?.includes(item.playlistId)) {
        acc.push(item);
      }
      return acc;
    },
    []
  );
  return (
    <Container maxWidth={"lg"} sx={{ mt: 16, mb: 2 }}>
      {recentList?.length > 0 ? (
        <Grid container spacing={4}>
          {recentList?.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={shortid.generate()}>
              <PlaylistCard
                fav
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

export default Recent;
