import Lottie from "lottie-react";
import NoFavorite from "../lottie_json/favorite-heart.json";
import { Typography } from "@mui/material";

const NoFavoriteFound = ({ title }) => {
  return (
    <Typography
      component={"div"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
      }}
    >
      <Typography
        component={"div"}
        sx={{ width: "400px", margin: "auto", textAlign: "center" }}
      >
        <Lottie animationData={NoFavorite} loop autoplay />
        <Typography
          variant="h6"
          sx={{
            color: "#797c7f",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
            wordSpacing: "7px",
          }}
        >
          {title}
        </Typography>
      </Typography>
    </Typography>
  );
};

export default NoFavoriteFound;
