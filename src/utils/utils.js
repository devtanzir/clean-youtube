export const extractPlaylistId = (input) => {
  if (input.startsWith("PL")) return input;
  const regex = /(?:list=)([a-zA-Z0-9_-]+)/;
  const match = input.match(regex);
  return match ? match[1] : null;
};

export const dateFormate = (date) => new Date(date).toLocaleDateString();
