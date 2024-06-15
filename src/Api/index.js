import axios from "axios";

const KEY = import.meta.env.VITE_API_KEY;
const getPlaylistItem = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${KEY}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);

  result = [...result, ...data.items];
  if (data.nextPageToken) {
    result = getPlaylist(playlistId, data.nextPageToken, result);
  }
  return result;
};

const getPlaylist = async (playlistId) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${KEY}`;
  const { data } = await axios.get(URL);
  let playlistItems = await getPlaylistItem(playlistId);

  const {
    channelId,
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelTitle,
  } = data?.items?.[0]?.snippet;

  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item.snippet;
    return {
      title,
      description,
      thumbnail: medium,
      contentDetails: item.contentDetails,
    };
  });
  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnails: thumbnails.medium,
    channelId,
    channelTitle,
    playlistItems,
  };
};

export default getPlaylist;
