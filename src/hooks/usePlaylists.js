import { useState } from "react";
import getPlaylist from "../Api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorites: [],
  });
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
