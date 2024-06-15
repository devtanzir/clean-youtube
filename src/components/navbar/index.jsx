import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Modal from "../playlist-form";

const Navbar = ({ getPlaylist }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getPlaylistId = (playlistId) => {
    getPlaylist(playlistId);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 2 }}>
        <Container maxWidth={"lg"}>
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Typography variant="h4">Clean YouTube</Typography>
              <Typography variant="body1">By Tanzir Ibne Ali</Typography>
            </Stack>
            <Button onClick={handleClickOpen} variant="contained">
              Add Playlist
            </Button>
            <Modal
              getPlaylistId={getPlaylistId}
              open={open}
              handleClose={handleClose}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;
