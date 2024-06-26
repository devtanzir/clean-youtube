import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import { useStoreState } from "easy-peasy";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Description, VideoList } from "../components";

const Player = () => {
  const { videoId, playlistId } = useParams();
  const { data } = useStoreState((state) => state.playlists);
  const [state, setState] = useState(false);

  const current = data[playlistId];

  const allVideos = current.playlistItems.map((item) => {
    return item.contentDetails.videoId;
  });

  const navigate = useNavigate();
  const currentIndex = allVideos.indexOf(videoId);
  const currentVideo = current.playlistItems[currentIndex];

  const handlePrevious = () => {
    const prevIndex =
      currentIndex === 0 ? allVideos.length - 1 : currentIndex - 1;
    navigate(`/${playlistId}/player/${allVideos[prevIndex]}`);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === allVideos.length - 1 ? 0 : currentIndex + 1;
    navigate(`/${playlistId}/player/${allVideos[nextIndex]}`);
  };
  const PlaylistIcon = () => {
    setState(!state);
  };
  return (
    <Container maxWidth={"lg"} sx={{ mt: 16, mb: 4 }}>
      <ReactPlayer
        playing={true}
        controls={true}
        width={"100%"}
        height={"70vh"}
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button onClick={handlePrevious} variant="contained">
          Previous
        </Button>
        <Button onClick={handleNext} variant="contained">
          Next
        </Button>
      </Box>
      <Box>
        <Typography mt={2} gutterBottom variant="h5" fontWeight={700}>
          {currentVideo.title}
        </Typography>
        <ListItem sx={{ pl: 0 }}>
          <ListItemAvatar>
            <Avatar
              sx={{ cursor: "pointer" }}
              src={current?.channelLogo?.url}
              alt={current?.channelTitle}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ cursor: "pointer" }}
            primary={current?.channelTitle}
            fontWeight={400}
            color="secondary"
          />
        </ListItem>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={7}>
          <Description current={current} currentVideo={currentVideo} />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <VideoList
            current={current}
            currentIndex={currentIndex}
            allVideos={allVideos}
            state={state}
            playlistId={playlistId}
            videoId={videoId}
            PlaylistIcon={PlaylistIcon}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Player;
