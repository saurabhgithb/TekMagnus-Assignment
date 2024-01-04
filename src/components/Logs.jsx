import { Box, Card, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const Logs = () => {
  const [value, setValue] = React.useState("logs");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{marginY: 5}}>
        <Typography
          variant="h1"
          component="div"
          sx={{ fontSize: 22, fontWeight: 500 }}
          color="text.primary"
          gutterBottom
        >
          Logs
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="Attention status tabs"
          >
            <Tab value="logs" label="Attendence Log" />
            <Tab value="request" label="Attendence Request" />
          </Tabs>
          <Card>

          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Logs;
