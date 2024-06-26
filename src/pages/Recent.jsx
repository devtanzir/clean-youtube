import { Container, Grid } from "@mui/material";
import shortid from "shortid";
import { useStoreState } from "easy-peasy";
import { PlaylistCard } from "../components";
import NodataFound from "../animation/NodataFound";

const Recent = () => {
  const state = useStoreState((state) => state);
  const recentList = state.recent?.items
    ?.map((recentId) =>
      Object.values(state.playlists.data).find(
        (item) => item.playlistId === recentId
      )
    )
    .filter(Boolean);
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
        <NodataFound title={"No Recent Playlist Found !"} />
      )}
    </Container>
  );
};

export default Recent;
