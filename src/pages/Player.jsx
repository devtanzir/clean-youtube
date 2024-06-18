import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Player = ({ playlists }) => {
  const { playlistId } = useParams();

  const current = playlists[playlistId];

  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Typography align="center" variant="h3">
        {current.playlistTitle ? current.playlistTitle : "There is no Title"}
      </Typography>
      {current.playlistDescription ? (
        <Typography align="center" variant="p">
          {current.playlistDescription}
        </Typography>
      ) : (
        <Typography
          align="center"
          variant="h5"
          sx={{ marginTop: "10px" }}
          color={"red"}
        >
          There is no Description
        </Typography>
      )}
    </Container>
  );
};

export default Player;
