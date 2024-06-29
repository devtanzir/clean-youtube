import { action, thunk } from "easy-peasy";
import getPlaylist from "../Api";
import { toast } from "react-toastify";
const PlaylistsModel = {
  data: {},
  error: "",
  isLoading: false,
  addPlaylist: action((state, payload) => {
    state.data[payload.playlistId] = payload;
  }),
  removeFromPlaylist: action((state, payload) => {
    delete state.data[payload];
    toast.success("playlist removed Successfully");
  }),
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  getPlaylists: thunk(
    async ({ addPlaylist, setLoading, setError }, playlistId, { getState }) => {
      setLoading(true);
      try {
        const currentData = getState().data;

        if (currentData[playlistId]) {
          setLoading(false);
          return { success: false, message: "Playlist Already Exist" };
        }

        if (Object.keys(currentData).length >= 10) {
          setLoading(false);
          return { success: false, message: "Maximum Playlist Reached" };
        }

        const playlist = await getPlaylist(playlistId);
        addPlaylist(playlist);
        setError(""); // Clear any previous errors on success
        return { success: true, message: "Playlist created successfully" };
      } catch (error) {
        const errorMessage =
          error.response?.data?.error?.message || "Something went wrong";
        setError(errorMessage);
        toast.error(errorMessage);
        return { success: false, message: errorMessage };
      } finally {
        setLoading(false);
      }
    }
  ),
};

export default PlaylistsModel;
