import {
  Breadcrumbs,
  Link,
  Typography,
  Container,
  Paper,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import AttendanceStatus from "./AttendanceStatus";
import Timings from "./Timings";
import Action from "./Action";

const MySpace = () => {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth={{ xs: "sm", md: "lg" }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: "common.white" }}>
          <Link underline="hover" color="common.white" href="#mySpace">
            My Space
          </Link>
          <Typography color="secondary.main">Attendance</Typography>
        </Breadcrumbs>
        <Paper
          sx={{
            display: "flex",
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.main,
            p: "1rem .5rem",
            outline: "1px solid grey",
            marginY: "1rem",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
            },
          }}
        >
          <AttendanceStatus />
          <Timings />
          <Action />
        </Paper>
      </Container>
    </>
  );
};

export default MySpace;
