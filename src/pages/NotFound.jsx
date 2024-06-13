import { Button, Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        marginTop: "10px",
      }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Page Not Found
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
