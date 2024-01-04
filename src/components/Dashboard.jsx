import { Box } from "@mui/material";
import React, { useState } from "react";
import AttendanceStatus from "./AttendanceStatus";
import Logs from "./Logs";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Box flex={4} p={{ xs: 0, md: 2 }} bgcolor={"background.default"} color={"text.primary"}>
      <AttendanceStatus />
      <Logs />
    </Box>
    </>
  );
};

export default Dashboard;
