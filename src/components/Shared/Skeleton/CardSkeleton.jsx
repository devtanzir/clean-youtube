import { Box, Card, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Skeleton variant="rectangular" width={"100%"} height={180} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton width={"95%"} sx={{ mx: "auto" }} />
        <Skeleton width="60%" sx={{ ml: "9.5px" }} />
      </Box>
      <Skeleton width={"95%"} sx={{ mx: "auto", mb: 0.5 }} />
    </Card>
  );
};

export default CardSkeleton;
