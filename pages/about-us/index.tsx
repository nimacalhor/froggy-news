import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

const AboutUsPage = () => {
  return (
    <Box
      sx={{
        height: "max(90vh, 500px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GitHubIcon color="secondary" sx={{ fontSize: "100px", mr: 1 }} />
      <Typography variant="h3">
        <a href="https://github.com/nimacalhor">my git hub</a>
      </Typography>
    </Box>
  );
};

export default AboutUsPage;
