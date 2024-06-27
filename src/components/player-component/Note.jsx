import { Card, Divider, Typography } from "@mui/material";

import NoteItems from "./NoteItems";

const Note = ({ noteContents, deleteNote, updateNote }) => {
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
        <NoteItems
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      ))}
    </Card>
  );
};

export default Note;
