import { action } from "easy-peasy";

const RecentModel = {
  items: [],
  addToRecent: action((state, playlistId) => {
    if (state.items.includes(playlistId)) return;
    state.items.unshift(playlistId);
    state.items = state.items.splice(0, 5);
  }),
};

export default RecentModel;
