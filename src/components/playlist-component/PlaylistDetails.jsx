import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";

const PlaylistDetails = ({ playlist, date }) => {
  return (
    <Card
      sx={{
        // position: "fixed",
        // maxWidth: "25vw",
        backgroundColor: "#f7f1e3",
        borderRadius: "10px 10px 0 0",
        padding: "30px",
        // maxHeight: "86.5vh",
        ...(playlist?.playlistDescription?.length > 779 && {
          // overflowY: "scroll",
          scrollBehavior: "smooth",
          // scrollbarWidth: "thin",
          // scrollbarColor: "#84817a #f7f1e3",
        }),
      }}
    >
      <CardMedia
        sx={{
          height: 260,
          borderRadius: "10px",
        }}
        image={playlist?.playlistThumbnails.url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight={700}>
          {playlist.playlistTitle}
        </Typography>
        <Typography variant="h6" fontSize={17} fontWeight={700}>
          {playlist.channelTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {playlist.playlistItems.length} Videos - {date}
        </Typography>
        <Typography mt={5} variant="h6" fontSize={14} color="text.secondary">
          {playlist?.playlistDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};
PlaylistDetails.propTypes = {
  playlist: PropTypes.object,
  date: PropTypes.string,
};

export default PlaylistDetails;
