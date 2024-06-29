import { useState } from "react";
import { toast } from "react-toastify";
import { extractPlaylistId } from "../../../../utils/utils";

const useModal = (
  handleClose,
  getPlaylistId,
  addNote,
  editNote,
  submitNote,
  note,
  loading,
  timeStamp,
  edit
) => {
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
          submitNote();
          handleClose();
        } else {
          editNote(state);
          handleClose();
        }
      }

      setState("");
    }
  };
  const close = () => {
    handleClose();
    if (!edit && note) {
      submitNote();
    }
  };
  const handleState = (payload) => setState(payload);
  return {
    handleSubmit,
    close,
    handleState,
  };
};

export default useModal;
