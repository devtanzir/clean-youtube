import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import {
  convertSecondsToTime,
  extractPlaylistId,
} from "../../../utils/utils.js";

const Modal = ({
  open,
  handleClose,
  getPlaylistId,
  timeStamp,
  addNote,
  note = false,
}) => {
  const [state, setState] = useState("");
  const handleSubmit = (e) => {
    if (!state) {
      alert("invalid data");
    } else {
      if (!note) {
        const data = extractPlaylistId(state);
        if (data) {
          getPlaylistId(data);
        } else {
          return alert("invalid playlist Id");
        }
      } else {
        addNote(state, timeStamp);
      }

      setState("");
      handleClose();
    }
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{note ? "Create Note" : "Add Playlist"} </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {!note &&
              `To add a new playlist please insert the playlist id or playlist
            link. Please make sure the link is correct. Otherwise we wont't able
            to fetch the playlist information`}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            label={`${
              note
                ? `${convertSecondsToTime(timeStamp)}`
                : "Playlist ID or Link"
            }`}
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>
            {note ? "Add Note" : "Add Playlist"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Modal;
