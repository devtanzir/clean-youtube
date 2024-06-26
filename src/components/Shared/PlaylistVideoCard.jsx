import { PlayArrow } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useStoreActions } from "easy-peasy";
import moment from "moment";
import { Link as RouterLink } from "react-router-dom";

const PlaylistVideoCard = ({
  video,
  index,
  channelTitle,
  playlistId,
  player = false,
  videoId,
}) => {
  const date = moment(video.contentDetails.videoPublishedAt).fromNow();
  const recent = useStoreActions((action) => action.recent);
  return (
    <Card
      to={`/${playlistId}/player/${video.contentDetails.videoId}`}
      component={RouterLink}
      onClick={() => recent.addToRecent(playlistId)}
      sx={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        px: 2,
        py: "13px",
        gap: "16px",
        backgroundColor: "transparent",
        ...(player && {
          py: "8px",
          ...(videoId === video.contentDetails.videoId && {
            backgroundColor: "#f0f0f0",
          }),
        }),

        boxShadow: "none",
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: 14,
          ...(player && {
            fontSize: 12,
            fontWeight: 400,
            textAlign: "center",
            width: "24px",
          }),
        }}
        fontSize={14}
        fontWeight={500}
        color={"#aaa"}
      >
        {player &&
          (videoId === video.contentDetails.videoId ? (
            <PlayArrow sx={{ width: 18 }} />
          ) : (
            index + 1
          ))}
      </Typography>
      <CardMedia
        component="img"
        sx={{
          width: 160,
          borderRadius: 3,
          height: 90,
          objectFit: "cover",
          ...(player && {
            width: 100,
            height: 56,
            borderRadius: 1,
          }),
        }}
        image={video.thumbnail.url}
        alt={video.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            padding: 4,
            pl: 0,
            py: "0",
            "&:last-child": {
              pb: "0",
            },
          }}
        >
          <Typography
            sx={{
              ...(player && {
                fontSize: 14,
              }),
            }}
            variant="h5"
            fontSize={16}
            fontWeight={500}
            title={video.title}
          >
            {player &&
              (video.title.length > 50
                ? `${video.title.substr(0, 50)}...`
                : video.title)}
            {!player && video.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={12}
            fontWeight={500}
            mt={1}
            sx={{
              ...(player && {
                mt: "4px",
              }),
            }}
          >
            {channelTitle} {!player && ` • ${date}`}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default PlaylistVideoCard;
