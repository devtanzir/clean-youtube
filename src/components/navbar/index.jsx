import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Modal from "../Shared/playlist-form";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import useModal from "../../hooks/useModal";
import { toast } from "react-toastify";
import CustomNavLink from "./customNavlink";

const Navbar = () => {
  const playlist = useStoreActions((actions) => actions.playlists);
  const playlistState = useStoreState((state) => state.playlists);
  const { handleClickOpen, handleClose, open } = useModal();

  const getPlaylistId = async (playlistId) => {
    const res = await playlist.getPlaylists(playlistId);
    if (res.success) {
      toast.success(res.message);
      handleClose();
    } else {
      toast.error(res.message);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 2 }}>
        <Container maxWidth={"lg"}>
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link
                sx={{ textDecoration: "none", color: "black" }}
                to={"/"}
                component={RouterLink}
              >
                <Typography variant="h4">StudyTube</Typography>
              </Link>
              <Typography variant="body1">By Tanzir Ibne Ali</Typography>
            </Stack>
            <Box sx={{ flexGrow: 1, gap: 4, display: "flex" }}>
              <CustomNavLink to={"/"} component={RouterLink}>
                All Playlist
              </CustomNavLink>
              <CustomNavLink to={"/recent"} component={RouterLink}>
                Recent
              </CustomNavLink>
              <CustomNavLink to={"/favorite"} component={RouterLink}>
                Favorite
              </CustomNavLink>
            </Box>
            <Button onClick={handleClickOpen} variant="contained">
              Add Playlist
            </Button>
            <Modal
              getPlaylistId={getPlaylistId}
              loading={playlistState.isLoading}
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
