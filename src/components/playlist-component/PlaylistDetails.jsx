import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const PlaylistDetails = ({ current, date }) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        backgroundColor: "#f7f1e3",
        borderRadius: "10px 10px 0 0",
        padding: "30px",
        maxHeight: "86vh",
        ...(current?.playlistDescription?.length > 779 && {
          overflowY: "scroll",
          scrollBehavior: "smooth",
          // Add custom scrollbar styles for Firefox
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "#84817a #f7f1e3", // For Firefox
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f7f1e3",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#84817a",
            borderRadius: "10px",
          },
        }),
      }}
    >
      <CardMedia
        sx={{ height: 260, borderRadius: "10px" }}
        image={current?.playlistThumbnails.url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight={700}>
          {current.playlistTitle}
        </Typography>
        <Typography variant="h6" fontSize={17} fontWeight={700}>
          {current.channelTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {current.playlistItems.length} Videos - {date}
        </Typography>
        <Typography mt={5} variant="h6" fontSize={14} color="text.secondary">
          {current?.playlistDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlaylistDetails;
