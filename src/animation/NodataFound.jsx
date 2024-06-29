import Lottie from "lottie-react";
import Nodata from "../lottie_json/nodata.json";
import { Typography } from "@mui/material";

const NodataFound = ({ title }) => {
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
        <Lottie animationData={Nodata} loop autoplay />
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

export default NodataFound;
