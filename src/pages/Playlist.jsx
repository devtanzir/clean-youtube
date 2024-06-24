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
import { PlaylistDetails } from "../components/playlist-component";

const Playlist = () => {
  const { playlistId } = useParams();
  const { data } = useStoreState((state) => state.playlists);

  const current = data[playlistId];

  const date = dateFormate(current?.playlistPublishedAt);

  return (
    <Container maxWidth={"lg"} sx={{ mt: 16 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} lg={5}>
          <PlaylistDetails current={current} date={date} />
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          {current?.playlistItems?.map((item, index) => (
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                gap: "16px",
                backgroundColor: "transparent",
                boxShadow: "none",
                cursor: "pointer",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={500}
                color={"#aaa"}
              >
                {index + 1}
              </Typography>
              <CardMedia
                component="img"
                sx={{
                  width: 160,
                  borderRadius: 3,
                  height: 90,
                  objectFit: "cover",
                }}
                image={item.thumbnail.url}
                alt={item.title}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto", pl: 0 }}>
                  <Typography variant="h5" fontSize={16} fontWeight={500}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={12}
                    fontWeight={500}
                    mt={1}
                  >
                    {current.channelTitle} •{" "}
                    {item.contentDetails.videoPublishedAt}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <IconButton aria-label="previous"></IconButton>
                  <IconButton aria-label="play/pause"></IconButton>
                  <IconButton aria-label="next"></IconButton>
                </Box>
              </Box>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Playlist;
