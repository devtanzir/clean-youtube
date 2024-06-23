import { action } from "easy-peasy";

const FavoriteModel = {
  items: [],
  addToFavorite: action((state, playlistId) => {
    state.items.push(playlistId);
  }),
  removeFromFavorite: action((state, playlistId) => {
    state.items = state.items.filter((PI) => PI !== playlistId);
  }),
};

export default FavoriteModel;
