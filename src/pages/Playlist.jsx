import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import { dateFormate } from "../utils/utils";
import {
  PlaylistDetails,
  PlaylistVideoCard,
} from "../components/playlist-component";
import shortid from "shortid";

const Playlist = () => {
  const { playlistId } = useParams();
  const { data } = useStoreState((state) => state.playlists);

  const current = data[playlistId];

  const date = dateFormate(current?.playlistPublishedAt);

  return (
    <Container maxWidth={"lg"} sx={{ mt: 16, mb: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} lg={5}>
          <PlaylistDetails playlist={current} date={date} />
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          {current?.playlistItems?.map((item, index) => (
            <PlaylistVideoCard
              key={shortid.generate()}
              video={item}
              index={index}
              channelTitle={current.channelTitle}
              playlistId={playlistId}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Playlist;
