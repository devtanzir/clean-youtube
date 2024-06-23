import { createStore, persist } from "easy-peasy";
import PlaylistsModel from "./PlaylistModel";
import FavoriteModel from "./FavoriteModel";
import RecentModel from "./RecentModel";

const store = createStore(
  persist(
    {
      playlists: PlaylistsModel,
      favorite: FavoriteModel,
      recent: RecentModel,
    },
    { storage: localStorage }
  )
);

export default store;
