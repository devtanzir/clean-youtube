import { Box, Divider, Link, List, ListItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CustomNavLink from "./customNavlink";
import PropTypes from "prop-types";
const DrawerComponent = ({ handleDrawerToggle }) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link
        sx={{ textDecoration: "none", color: "black", my: 2, display: "block" }}
        to={"/"}
        component={RouterLink}
        variant="h6"
      >
        StudyTube
      </Link>
      <Divider />
      <List>
        <ListItem sx={{ justifyContent: "center" }}>
          <CustomNavLink to={"/"} component={RouterLink}>
            All Playlist
          </CustomNavLink>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <CustomNavLink to={"/recent"} component={RouterLink}>
            Recent
          </CustomNavLink>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <CustomNavLink to={"/favorite"} component={RouterLink}>
            Favorite
          </CustomNavLink>
        </ListItem>
      </List>
    </Box>
  );
};
DrawerComponent.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};
export default DrawerComponent;
