import { Box, Typography } from "@mui/material";
import React from "react";
import ActionCard from "./ActionCard";

const Action = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 2,
      }}
    >
      <Typography
        component="h3"
        variant="h6"
        sx={{ fontSize: "1rem", textAlign: "center", flex: 1 }}
      >
        Action
      </Typography>
      <Box
        sx={{
          flex: 1,
        }}
      />
      <Box sx={{ flex: 1 }}>
        <ActionCard />
      </Box>
    </Box>
  );
};

export default Action;
