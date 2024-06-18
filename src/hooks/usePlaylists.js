import { useEffect, useState } from "react";
import getPlaylist from "../Api";
import storage from "../utils/Storage";

const STORAGE_KEY = "cy__playlist__state";
const INIT_STATE = {
  playlists: {},
  recentPlaylists: [],
  favorites: [],
};
const usePlaylists = () => {
  const [state, setState] = useState(INIT_STATE);
  useEffect(() => {
    const data = storage.get(STORAGE_KEY);
    if (data) {
      setState({ ...data });
    }
  }, []);
  useEffect(() => {
    if (state !== INIT_STATE) {
      storage.save(STORAGE_KEY, state);
    }
  }, [state]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) return;
    setLoading(true);
    try {
      const playlist = await getPlaylist(playlistId);
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist,
        },
      }));
      setError("");
    } catch (e) {
      setError(e?.response?.data?.error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const addToFavorite = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorites: [...prev, playlistId],
    }));
  };

  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev, playlistId],
    }));
  };

  const getPlaylistsByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  return {
    playlists: state.playlists,
    favorites: getPlaylistsByIds(state.favorites),
    recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
    error,
    loading,
    getPlaylistById,
    addToFavorite,
    addToRecent,
  };
};

export default usePlaylists;
