import { Card, Stack, Typography } from "@mui/material";
import moment from "moment";
import { useState } from "react";

const Description = ({ current, currentVideo }) => {
  const [state, setState] = useState(false);
  return (
    <Card
      sx={{ padding: "30px", width: "96%", backgroundColor: "#f7f7f7", mt: 2 }}
    >
      <Stack direction={"row"} spacing={1} mb={2}>
        <Typography color={"#666"} variant="body2">
          {" "}
          {moment(currentVideo.contentDetails.videoPublishedAt).format(
            "MMMM Do YYYY"
          )}{" "}
          -
        </Typography>
        <Typography color={"#333"} variant="body2" fontWeight={600}>
          {current.playlistTitle}
        </Typography>
      </Stack>

      {state && (
        <Typography variant="body2"> {currentVideo.description}</Typography>
      )}

      {state ? (
        <Typography
          onClick={() => setState(!state)}
          variant="h6"
          fontWeight={700}
          fontSize={"14px"}
          sx={{ cursor: "pointer", mt: 1, userSelect: "none" }}
        >
          {" "}
          Show Less
        </Typography>
      ) : (
        <Typography
          onClick={() => setState(!state)}
          variant="body2"
          fontSize={"14px"}
          sx={{ cursor: "pointer", mt: 1, userSelect: "none" }}
        >
          {" "}
          {currentVideo.description?.length > 40 &&
            currentVideo.description.substr(0, 40)}
          ...More
        </Typography>
      )}
    </Card>
  );
};

export default Description;
