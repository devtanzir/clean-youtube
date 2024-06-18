import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const PlaylistCard = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playlistId,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={playlistThumbnail.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {playlistTitle.length > 50
            ? `${playlistTitle.substr(0, 50)} ...`
            : playlistTitle}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {channelTitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button>
          <Link
            sx={{ textDecoration: "none", color: "black" }}
            to={`/player/${playlistId}`}
            component={RouterLink}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <PlayCircleOutline />

              <Typography variant="body2" fontWeight={600}>
                Start Tutorial
              </Typography>
            </Stack>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};
export default PlaylistCard;
