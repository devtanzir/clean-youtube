import { action } from "easy-peasy";

const NoteModel = {
  data: {},
  createNote: action((state, payload) => {
    if (state.data[payload.videoId]) {
      state.data[payload.videoId].unshift({ ...payload });
    } else {
      state.data[payload.videoId] = [payload];
    }
    // toast.success("Note added successfully");
  }),
  updateNote: action((state, payload) => {
    if (state.data[payload.videoId]) {
      state.data[payload.videoId].find(
        (note) => note.id === payload.id
      ).content = payload.content;
    }
    // toast.success("Note updated successfully");
  }),
  deleteNote: action((state, payload) => {
    state.data[payload.videoId] = state.data[payload.videoId].filter(
      (note) => note.id !== payload.id
    );
    // toast.success("Note Deleted successfully");
  }),
};

export default NoteModel;
