import { action, thunk } from "easy-peasy";
import getPlaylist from "../Api";
const PlaylistsModel = {
  data: {},
  error: "",
  isLoading: false,
  addPlaylist: action((state, payload) => {
    state.data[payload.playlistId] = payload;
  }),
  removeFromPlaylist: action((state, payload) => {
    delete state.data[payload];
  }),
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  getPlaylists: thunk(
    async ({ addPlaylist, setLoading, setError }, payload, { getState }) => {
      setLoading(true);
      try {
        if (!getState().data[payload]) {
          const playlist = await getPlaylist(payload);
          addPlaylist(playlist);
          setError("");
        }
      } catch (e) {
        setError(e.response?.data?.error?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  ),
};

export default PlaylistsModel;
