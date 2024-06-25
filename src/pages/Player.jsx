import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { useStoreState } from "easy-peasy";
import moment from "moment";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { Description } from "../components/player-component";
import { PlaylistVideoCard } from "../components/playlist-component";
import shortid from "shortid";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";

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
  return (
    <Container maxWidth={"lg"} sx={{ mt: 16, mb: 2 }}>
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
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
              py: "20px",
              backgroundColor: "#f7f7f7",
              px: "10px",
              borderRadius: 3,
              mt: 2,
            }}
          >
            <Typography
              title={current.playlistTitle}
              variant="h5"
              fontWeight={700}
              fontSize={20}
            >
              {current.playlistTitle.length > 37
                ? `${current.playlistTitle.substr(0, 37)}...`
                : current.playlistTitle}
            </Typography>
            <IconButton onClick={() => setState(!state)}>
              {state ? <ClearIcon /> : <ExpandMore />}
            </IconButton>
          </Stack>
          {state && (
            <Box
              sx={{
                ...(allVideos.length > 5 && {
                  maxHeight: "390px",
                  overflowY: "scroll",
                  scrollBehavior: "smooth",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#84817a #fff",
                }),
              }}
            >
              {current?.playlistItems?.map((item, index) => (
                <PlaylistVideoCard
                  player
                  key={shortid.generate()}
                  video={item}
                  index={index}
                  channelTitle={current.channelTitle}
                  playlistId={playlistId}
                />
              ))}
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Player;
