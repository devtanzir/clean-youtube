import { Box, Stack, Typography } from "@mui/material";
import { convertSecondsToTime } from "../../utils/utils";
import Modal from "../Shared/playlist-form";
import Confirm from "../Shared/Confirm";
import PropTypes from "prop-types";
import useNoteItem from "./hook/useNoteItem";

const NoteItems = ({ note, deleteNote, updateNote }) => {
  const {
    ConfOpen,
    ConfClose,
    confState,
    handleClickOpen,
    handleClose,
    open,
    editNote,
    handleNote,
  } = useNoteItem(note, deleteNote, updateNote);
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

NoteItems.propTypes = {
  note: PropTypes.object,
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
};

export default NoteItems;
