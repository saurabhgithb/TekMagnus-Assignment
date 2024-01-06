import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

const TimingCard = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ marginY: "1rem", px: "5px" }}
        disableGutters
      >
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#242329",
            color: "common.white",
            padding: "1rem 0px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            component="h4"
            variant="body2"
            sx={{ fontWeight: 400, fontSize: ".9rem" }}
          >
            Today (09:30AM - 06:30PM)
          </Typography>
          <Typography
            component="p"
            variant="body2"
            sx={{ fontWeight: 300, fontSize: ".75rem" }}
          >
            Duration: 9h 0m Break: 0m
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default TimingCard;
