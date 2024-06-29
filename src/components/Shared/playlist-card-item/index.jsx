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
  Tooltip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PlayCircleOutline } from "@mui/icons-material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import Confirm from "../Confirm";
import useModal from "../../../hooks/useModal";
import PropTypes from "prop-types";

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
  const { open, handleClickOpen, handleClose } = useModal();
  const handleDelete = (bool) => {
    if (bool) {
      action.playlists.removeFromPlaylist(playlistId);
      action.favorite.removeFromFavorite(playlistId);
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
            to={`/playlist/${playlistId}`}
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
            <Tooltip placement="top" title="Remove From Favorite">
              <IconButton
                onClick={() => action.favorite.removeFromFavorite(playlistId)}
              >
                <FavoriteIcon color="error" />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip placement="top" title="Add to Favorite">
              <IconButton
                onClick={() => action.favorite.addToFavorite(playlistId)}
              >
                <FavoriteBorderIcon color="error" />
              </IconButton>
            </Tooltip>
          )}

          {!fav && (
            <Tooltip placement="top" title="Delete">
              <IconButton onClick={handleClickOpen}>
                <DeleteIcon color="warning" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </CardActions>
      <Confirm
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </Card>
  );
};
PlaylistCard.propTypes = {
  playlistThumbnail: PropTypes.object,
  playlistTitle: PropTypes.string,
  channelTitle: PropTypes.string,
  fav: PropTypes.bool,
  channelLogo: PropTypes.object,
  playlistId: PropTypes.string,
};

export default PlaylistCard;
