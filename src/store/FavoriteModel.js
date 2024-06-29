import { action } from "easy-peasy";
import { toast } from "react-toastify";

const FavoriteModel = {
  items: [],
  addToFavorite: action((state, playlistId) => {
    state.items.push(playlistId);
    toast.success("Added in Favorite");
  }),
  removeFromFavorite: action((state, playlistId) => {
    state.items = state.items.filter((PI) => PI !== playlistId);
  }),
};

export default FavoriteModel;
