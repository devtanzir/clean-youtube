import { ExpandMore } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import shortid from "shortid";
import { PlaylistVideoCard } from "../playlist-component";

const VideoList = ({
  current,
  currentIndex,
  allVideos,
  state,
  playlistId,
  videoId,
  PlaylistIcon,
}) => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          py: "20px",
          backgroundColor: "#f7f7f7",
          px: "10px",
          borderRadius: 3,
          mt: 2,
        }}
      >
        <Stack>
          <Typography
            title={current.playlistTitle}
            variant="h5"
            fontWeight={700}
            fontSize={20}
          >
            {current.playlistTitle.length > 37
              ? `${current.playlistTitle.substr(0, 37)}...`
              : current.playlistTitle}
          </Typography>
          <Stack direction={"row"} alignItems={"center"}>
            <Typography
              variant="body1"
              color={"#666"}
              fontSize={"14px"}
              fontWeight={500}
            >
              {current.channelTitle}
            </Typography>
            <Typography variant="body2" color={"#888"} ml={"5px"}>
              - {currentIndex + 1}/{allVideos.length}
            </Typography>
          </Stack>
        </Stack>
        <IconButton onClick={PlaylistIcon}>
          {state ? <ClearIcon /> : <ExpandMore />}
        </IconButton>
      </Stack>
      {state && (
        <Box
          sx={{
            ...(allVideos.length > 5 && {
              maxHeight: "390px",
              overflowY: "scroll",
              scrollBehavior: "smooth",
              scrollbarWidth: "thin",
              scrollbarColor: "#84817a #fff",
            }),
          }}
        >
          {current?.playlistItems?.map((item, index) => (
            <PlaylistVideoCard
              player
              key={shortid.generate()}
              videoId={videoId}
              video={item}
              index={index}
              channelTitle={current.channelTitle}
              playlistId={playlistId}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default VideoList;
