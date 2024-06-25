import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth={"lg"} sx={{ mt: 16, mb: 2 }}>
      <Typography align="center" variant="h2">
        404 Not Found
      </Typography>
    </Container>
  );
};

export default NotFound;
