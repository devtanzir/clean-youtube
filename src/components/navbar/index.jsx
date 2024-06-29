import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CustomNavLink from "./customNavlink";
import Modal from "../Shared/playlist-form";
import DrawerComponent from "./Drawer";
import useNavbar from "./hook/useNavbar";

const Navbar = (props) => {
  const {
    mobileOpen,
    handleDrawerToggle,
    playlistState,
    handleClickOpen,
    open,
    handleClose,
    getPlaylistId,
    container,
  } = useNavbar(props);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="fixed" color="default" sx={{ py: 2 }}>
        <Container maxWidth={"lg"}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Stack sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Link
                sx={{ textDecoration: "none", color: "black" }}
                to={"/"}
                component={RouterLink}
              >
                <Typography variant="h4">StudyTube</Typography>
              </Link>
              <Typography variant="body1">By Tanzir Ibne Ali</Typography>
            </Stack>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                flexGrow: 1,
              }}
            >
              <CustomNavLink
                sx={{ marginRight: "20px" }}
                to={"/"}
                component={RouterLink}
              >
                All Playlist
              </CustomNavLink>
              <CustomNavLink
                sx={{ marginRight: "20px" }}
                to={"/recent"}
                component={RouterLink}
              >
                Recent
              </CustomNavLink>
              <CustomNavLink to={"/favorite"} component={RouterLink}>
                Favorite
              </CustomNavLink>
            </Box>
            <Button
              onClick={handleClickOpen}
              sx={{ ml: "auto" }}
              variant="contained"
            >
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

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          <DrawerComponent handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </nav>
    </Box>
  );
};

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
