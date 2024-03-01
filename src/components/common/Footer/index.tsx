import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
  return (
    <AppBar component="footer" position="static">
      <Container maxWidth="md" sx={{ p: 4 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption">©okicafe</Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
