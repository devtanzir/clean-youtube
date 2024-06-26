import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import { convertSecondsToTime } from "../../utils/utils";

const Note = ({ noteContents, deleteNote }) => {
  return (
    <Card
      sx={{
        padding: "30px",
        width: "96%",
        backgroundColor: "#f7f7f7",
        mt: 2,
      }}
    >
      <Typography variant="h5">
        {noteContents.length >= 10
          ? noteContents.length
          : `0${noteContents.length}`}{" "}
        Notes
      </Typography>
      <Divider variant="fullWidth" />
      {noteContents.map((note) => (
        <Box mt={2} key={note.id}>
          <Typography variant="h6" fontSize={14} fontWeight={600}>
            {convertSecondsToTime(note.timeStamp)}
          </Typography>
          <Typography variant="body2">{note.content}</Typography>
          <Stack direction={"row"} spacing={2} mt={0.5}>
            <Typography
              variant="body1"
              sx={{
                cursor: "pointer",
                color: "#000",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              Edit
            </Typography>
            <Typography
              variant="body1"
              onClick={() => deleteNote(note)}
              sx={{
                cursor: "pointer",
                color: "#000",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              Delete
            </Typography>
          </Stack>
        </Box>
      ))}
    </Card>
  );
};

export default Note;
