import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const CustomNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "black",
  "&.active": {
    color: theme.palette.error.main,
  },
}));

export default CustomNavLink;
