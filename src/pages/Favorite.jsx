import { Container, Grid, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import shortId from "shortid";
import { PlaylistCard } from "../components";

const Favorite = () => {
  const state = useStoreState((state) => state);
  const favoriteList = state.favorite?.items
    ?.map((favoriteId) =>
      Object.values(state.playlists.data).find(
        (item) => item.playlistId === favoriteId
      )
    )
    .filter(Boolean);
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
