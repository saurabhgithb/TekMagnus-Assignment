import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import TimingCard from "./TimingCard";

const Timings = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: "10px",
      }}
    >
      <Typography
        component="h3"
        variant="h6"
        sx={{ fontSize: "1rem", textAlign: "center", flex: 1 }}
      >
        Timings
      </Typography>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          gap: "5px",
          marginX: { xs: "auto", md: 0 },
        }}
      >
        {["M", "T", "W", "T", "F", "S", "S"].map((text, index) => (
          <Button
            key={index}
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "50%",
              minWidth: "20px",
              minHeight: "20px",
              background: "transparent",
              color: "common.white",
              fontWeight: 300,
              fontSize: "10px",
              outline: "1px solid grey",
              ...(text == "W" && {
                outlineColor: theme.palette.secondary.main,
                color: theme.palette.secondary.main,
              }),
              ...(index == 5 && {
                outlineColor: theme.palette.success.main,
                color: theme.palette.success.main,
              }),
              ...(index == 6 && {
                outlineColor: theme.palette.error.main,
                color: theme.palette.error.main,
              }),
            }}
          >
            {text}
          </Button>
        ))}
      </Box>
      <Box sx={{ flex: 1 }}>
        <TimingCard />
      </Box>
    </Box>
  );
};

export default Timings;
