import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PlayCircleOutline } from "@mui/icons-material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const PlaylistCard = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  fav = false,
  channelLogo,
  playlistId,
}) => {
  const action = useStoreActions((actions) => actions);
  const favoriteState = useStoreState((state) => state.favorite);

  const handleDelete = () => {
    const conf = confirm("Are You Sure");
    if (conf) {
      action.playlists.removeFromPlaylist(playlistId);
    }
  };
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
        <Typography variant="h6" color="text.primary" title={playlistTitle}>
          {playlistTitle.length > 50
            ? `${playlistTitle.substr(0, 50)} ...`
            : playlistTitle}
        </Typography>
        <ListItem sx={{ pl: 0 }}>
          <ListItemAvatar>
            <Avatar src={channelLogo?.url} alt={channelTitle} />
          </ListItemAvatar>
          <ListItemText
            primary={channelTitle}
            fontWeight={400}
            color="secondary"
          />
        </ListItem>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }} disableSpacing>
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
        <Box component={"div"}>
          {favoriteState?.items?.includes(playlistId) ? (
            <IconButton
              onClick={() => action.favorite.removeFromFavorite(playlistId)}
            >
              <FavoriteIcon color="error" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => action.favorite.addToFavorite(playlistId)}
            >
              <FavoriteBorderIcon color="error" />
            </IconButton>
          )}

          {!fav && (
            <IconButton onClick={handleDelete}>
              <DeleteIcon color="warning" />
            </IconButton>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};
export default PlaylistCard;
