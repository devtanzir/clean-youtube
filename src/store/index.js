import { createStore, persist } from "easy-peasy";
import PlaylistsModel from "./PlaylistModel";
import FavoriteModel from "./FavoriteModel";
import RecentModel from "./RecentModel";
import NoteModel from "./NoteModel";

const store = createStore(
  persist(
    {
      playlists: PlaylistsModel,
      favorite: FavoriteModel,
      recent: RecentModel,
      notes: NoteModel,
    },
    { storage: localStorage }
  )
);

export default store;
