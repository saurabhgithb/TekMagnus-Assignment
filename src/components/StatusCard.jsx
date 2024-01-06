import { AccessTime, Timelapse } from "@mui/icons-material";
import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

const StatusCard = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ marginY: "1rem", px: "10px" }}
        disableGutters
      >
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#242329",
            color: "common.white",
            padding: "1rem 0px",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <AccessTime sx={{ width: "2rem", height: "2rem" }} />
            <Box sx={{ textAlign: "center" }}>
              <Typography
                component="h4"
                variant="body1"
                sx={{ fontWeight: 400, fontSize: "1.25rem" }}
              >
                Avg hrs/Day
              </Typography>
              <Typography
                component="p"
                variant="body2"
                sx={{ fontWeight: 300, fontSize: "12px" }}
              >
                ( 6hrs 48m )
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Timelapse
              sx={{ width: "2rem", height: "2rem", color: "#29CC4E" }}
            />
            <Box sx={{ textAlign: "center" }}>
              <Typography
                component="h4"
                variant="body1"
                sx={{ fontWeight: 400, fontSize: "1.25rem" }}
              >
                On Time Arrival
              </Typography>
              <Typography
                component="p"
                variant="body2"
                sx={{ fontWeight: 300, fontSize: "12px" }}
              >
                95%
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default StatusCard;
