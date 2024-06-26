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
          if (Object.keys(getState().data).length < 10) {
            const playlist = await getPlaylist(payload);
            addPlaylist(playlist);
            setError("");
          } else {
            alert("Maximum Playlist Reached");
          }
        } else {
          alert("Playlist Already Exist");
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
