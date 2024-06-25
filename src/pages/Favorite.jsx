import { Container, Grid, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import PlaylistCard from "../components/playlist-card-item";
import shortId from "shortid";

const Favorite = () => {
  const state = useStoreState((state) => state);
  const favoriteList = Object.values(state.playlists.data)?.reduce(
    (acc, item) => {
      if (state.favorite?.items?.includes(item.playlistId)) {
        acc.push(item);
      }
      return acc;
    },
    []
  );
  return (
    <Container maxWidth={"lg"} sx={{ mt: 16, mb: 2 }}>
      {favoriteList?.length > 0 ? (
        <Grid container spacing={4}>
          {favoriteList?.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={shortId.generate()}>
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

export default Favorite;
