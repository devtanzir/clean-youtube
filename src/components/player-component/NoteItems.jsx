import { Box, Stack, Typography } from "@mui/material";
import { convertSecondsToTime } from "../../utils/utils";
import { useState } from "react";
import Modal from "../Shared/playlist-form";

const NoteItems = ({ note, deleteNote, updateNote }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const editNote = (data) => {
    const cloneNote = { ...note };
    cloneNote.content = data;

    updateNote(cloneNote);
  };
  return (
    <>
      <Box mt={2} key={note.id}>
        <Typography variant="h6" fontSize={14} fontWeight={600}>
          {convertSecondsToTime(note.timeStamp)}
        </Typography>
        <Typography variant="body2">{note.content}</Typography>
        <Stack direction={"row"} spacing={2} mt={0.5}>
          <Typography
            variant="body1"
            onClick={handleClickOpen}
            sx={{
              cursor: "pointer",
              color: "#000",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            Edit
          </Typography>
          <Typography
            variant="body1"
            onClick={() => deleteNote(note)}
            sx={{
              cursor: "pointer",
              color: "#000",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            Delete
          </Typography>
        </Stack>
      </Box>
      <Modal
        note
        edit
        timeStamp={note.timeStamp}
        editNote={editNote}
        noteValue={note.content}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default NoteItems;
