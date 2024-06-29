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

import ReactPlayer from "react-player";
import { Description, Modal, Note, VideoList } from "../components";
import usePlayer from "./hook/usePlayer";

const Player = () => {
  const {
    videoId,
    playlistId,
    state,
    current,
    allVideos,
    currentIndex,
    currentVideo,
    handlePrevious,
    handleNext,
    PlaylistIcon,
    currentTime,
    playable,
    noteContents,
    handleClose,
    open,
    onProgress,
    addNote,
    updateNote,
    deleteNote,
    handleNote,
    submitNote,
  } = usePlayer();
  return (
    <Container maxWidth={"lg"} sx={{ mt: 16, mb: 4 }}>
      <ReactPlayer
        playing={playable}
        controls={true}
        width={"100%"}
        height={"70vh"}
        onProgress={onProgress}
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button onClick={handlePrevious} variant="contained">
          Previous
        </Button>
        <Button onClick={handleNote} variant="contained">
          Take Note
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
          {noteContents && noteContents.length > 0 && (
            <Note
              noteContents={noteContents}
              updateNote={updateNote}
              deleteNote={deleteNote}
            />
          )}
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
      <Modal
        note
        submitNote={submitNote}
        addNote={addNote}
        timeStamp={currentTime}
        open={open}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default Player;
