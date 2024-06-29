import { Box, Stack, Typography } from "@mui/material";
import { convertSecondsToTime } from "../../utils/utils";
import Modal from "../Shared/playlist-form";
import useModal from "../../hooks/useModal";
import Confirm from "../Shared/Confirm";

const NoteItems = ({ note, deleteNote, updateNote }) => {
  const {
    handleClickOpen: ConfOpen,
    handleClose: ConfClose,
    open: confState,
  } = useModal();
  const { handleClickOpen, handleClose, open } = useModal();
  const editNote = (data) => {
    const cloneNote = { ...note };
    cloneNote.content = data;

    updateNote(cloneNote);
  };

  const handleNote = (bool) => {
    deleteNote(note, bool);
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
            onClick={ConfOpen}
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
      <Confirm
        handleClose={ConfClose}
        open={confState}
        handleDelete={handleNote}
      />
    </>
  );
};

export default NoteItems;
