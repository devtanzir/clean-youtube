import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Typography align="center" variant="h2">
        404 Not Found
      </Typography>
    </Container>
  );
};

export default NotFound;
