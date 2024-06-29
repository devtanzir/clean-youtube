import { action } from "easy-peasy";
import { toast } from "react-toastify";

const RecentModel = {
  items: [],
  addToRecent: action((state, playlistId) => {
    if (state.items.includes(playlistId)) return;
    try {
      state.items.unshift(playlistId);
      state.items = state.items.splice(0, 5);
    } catch (e) {
      const errorMessage =
        error.response?.data?.error?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  }),
};

export default RecentModel;
