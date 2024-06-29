export const extractPlaylistId = (input) => {
  if (input.startsWith("PL")) return input;
  const regex = /(?:list=)([a-zA-Z0-9_-]+)/;
  const match = input.match(regex);
  if (!match[1].startsWith("PL")) {
    return null;
  }
  return match ? match[1] : null;
};

export const dateFormate = (date) => new Date(date).toLocaleDateString();

export const convertSecondsToTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const hoursDisplay = hrs > 0 ? `${hrs >= 10 ? hrs : `0${hrs}`}:` : "";
  const minutesDisplay = mins > 0 ? `${mins >= 10 ? mins : `0${mins}`}:` : "";
  const secondsDisplay = `${secs >= 10 ? secs : `0${secs}`}`;

  return `${hoursDisplay}${minutesDisplay}${secondsDisplay}`;
};
