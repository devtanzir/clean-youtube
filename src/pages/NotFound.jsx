import { Container } from "@mui/material";
import NotFound404 from "../animation/404";

const NotFound = () => {
  return (
    <Container maxWidth={"lg"} sx={{ mt: 16, mb: 2 }}>
      <NotFound404 title={"Maybe You Are Lost !"} />
    </Container>
  );
};

export default NotFound;
