import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import {
  convertSecondsToTime,
  extractPlaylistId,
} from "../../../utils/utils.js";
import { toast } from "react-toastify";

const Modal = ({
  open,
  handleClose,
  getPlaylistId,
  timeStamp,
  addNote,
  editNote,
  loading,
  noteValue,
  note = false,
  edit = false,
}) => {
  const [state, setState] = useState("");

  const handleSubmit = async (e) => {
    if (!state) {
      toast.error("invalid Credentials");
    } else {
      if (!note && !loading) {
        const data = extractPlaylistId(state);
        if (data) {
          getPlaylistId(data);
        } else {
          return toast.error("Invalid playlist Id");
        }
      } else {
        if (!edit) {
          addNote(state, timeStamp);
          handleClose();
        } else {
          editNote(state);
          handleClose();
        }
      }

      setState("");
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
            multiline={note}
            margin="dense"
            defaultValue={noteValue}
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
          <Button disabled={loading} onClick={handleSubmit}>
            {loading ? (
              <CircularProgress size={20} />
            ) : note ? (
              edit ? (
                "Update Note"
              ) : (
                "Add Note"
              )
            ) : (
              "Add Playlist"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Modal;
