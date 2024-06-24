import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { extractPlaylistId } from "../../utils/utils";

const Modal = ({ open, handleClose, getPlaylistId }) => {
  const [state, setState] = useState("");
  const handleSubmit = (e) => {
    if (!state) {
      alert("invalid State");
    } else {
      const data = extractPlaylistId(state);
      if (data) {
        getPlaylistId(data);
      } else {
        return alert("invalid playlist Id");
      }
      setState("");
      handleClose();
    }
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new playlist please insert the playlist id or playlist
            link. Please make sure the link is correct. Otherwise we wont't able
            to fetch the playlist information
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            label="Playlist ID or Link"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Modal;
