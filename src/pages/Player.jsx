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

import { useStoreActions, useStoreState } from "easy-peasy";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Description, Modal, Note, VideoList } from "../components";
import shortid from "shortid";

const Player = () => {
  const { videoId, playlistId } = useParams();
  const { data } = useStoreState((state) => state.playlists);
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const current = data[playlistId];

  const allVideos = current.playlistItems.map((item) => {
    return item.contentDetails.videoId;
  });

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

  /**
   * Note features
   */
  const [currentTime, setCurrentTime] = useState(0);
  const [open, setOpen] = useState(false);
  const notes = useStoreActions((actions) => actions.notes);
  const NoteData = useStoreState((state) => state.notes);
  const noteContents = NoteData.data[videoId];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };
  const addNote = (content, timeStamp) => {
    notes.createNote({
      id: shortid.generate(),
      videoId,
      timeStamp,
      content,
    });
  };
  const deleteNote = (note) => {
    const conf = confirm("are you sure you want to delete your note");
    if (conf) {
      notes.deleteNote(note);
    }
  };

  return (
    <Container maxWidth={"lg"} sx={{ mt: 16, mb: 4 }}>
      <ReactPlayer
        playing={true}
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
        <Button onClick={handleClickOpen} variant="contained">
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
            <Note noteContents={noteContents} deleteNote={deleteNote} />
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
        addNote={addNote}
        timeStamp={currentTime}
        open={open}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default Player;
