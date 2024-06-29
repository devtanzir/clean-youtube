import useModal from "../../../hooks/useModal";

const useNoteItem = (note, deleteNote, updateNote) => {
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
  return {
    ConfOpen,
    ConfClose,
    confState,
    handleClickOpen,
    handleClose,
    open,
    editNote,
    handleNote,
  };
};

export default useNoteItem;
