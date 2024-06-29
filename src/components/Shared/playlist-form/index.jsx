import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import { convertSecondsToTime } from "../../../utils/utils.js";
import PropTypes from "prop-types";
import useModal from "./hook/useModal.js";

const Modal = ({
  open,
  handleClose,
  getPlaylistId,
  timeStamp,
  addNote,
  editNote,
  submitNote,
  loading,
  noteValue,
  note = false,
  edit = false,
}) => {
  const { handleSubmit, close, handleState } = useModal(
    handleClose,
    getPlaylistId,
    addNote,
    editNote,
    submitNote,
    note,
    loading,
    timeStamp,
    edit
  );
  return (
    <>
      <Dialog open={open} onClose={close}>
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
            onChange={(e) => handleState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
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
Modal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  getPlaylistId: PropTypes.func,
  timeStamp: PropTypes.number,
  addNote: PropTypes.func,
  editNote: PropTypes.func,
  submitNote: PropTypes.func,
  loading: PropTypes.bool,
  noteValue: PropTypes.string,
  note: PropTypes.bool,
  edit: PropTypes.bool,
};

export default Modal;
