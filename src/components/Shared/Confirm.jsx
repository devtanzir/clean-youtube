import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";

const Confirm = ({ open, handleClose, handleDelete }) => {
  const handleDesAgree = () => {
    handleDelete(false);
    handleClose();
  };
  const handleAgree = () => {
    handleDelete(true);
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} sx={{ padding: "30px" }}>
        <DialogTitle>Do you want to delete these items?</DialogTitle>
        <DialogContent>
          When clicked the OK button, this Item will be deleted
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDesAgree}
            size="small"
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAgree}
            size="small"
            autoFocus
            variant="contained"
            color="success"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
Confirm.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default Confirm;
