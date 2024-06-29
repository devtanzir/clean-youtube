import { action } from "easy-peasy";
import { toast } from "react-toastify";

const NoteModel = {
  data: {},
  createNote: action((state, payload) => {
    try {
      if (state.data[payload.videoId]) {
        state.data[payload.videoId].unshift({ ...payload });
      } else {
        state.data[payload.videoId] = [payload];
      }
      toast.success("Note Added");
    } catch (e) {
      const errorMessage =
        error.response?.data?.error?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  }),
  updateNote: action((state, payload) => {
    try {
      if (state.data[payload.videoId]) {
        state.data[payload.videoId].find(
          (note) => note.id === payload.id
        ).content = payload.content;
      }
      toast.success("Updated Successfully");
    } catch (e) {
      const errorMessage =
        error.response?.data?.error?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  }),
  deleteNote: action((state, payload) => {
    try {
      state.data[payload.videoId] = state.data[payload.videoId].filter(
        (note) => note.id !== payload.id
      );
      toast.success("note deleted successfully");
      // Remove the videoId from data if no notes remain
      if (state.data[payload.videoId].length === 0) {
        delete state.data[payload.videoId];
      }
    } catch (e) {
      const errorMessage =
        error.response?.data?.error?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  }),
};

export default NoteModel;
