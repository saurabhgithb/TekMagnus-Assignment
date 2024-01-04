import { AccessTime, PieChart } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AttendenceStatusCards = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        gap={3}
        sx={{ margin: 2 }}
      >
        <Card variant="outlined" sx={{ minHeight: 113 }}>
          <CardContent>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ maxWidth: 400 }}
              gap={2}
            >
              <AccessTime />
              <Stack direction="column" alignItems="center">
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontSize: 22 }}
                  color="text.primary"
                  gutterBottom
                >
                  Avg hrs/Days
                </Typography>
                <Typography variant="body2">(6hrs 48min)</Typography>
              </Stack>
              <PieChart />
              <Stack direction="column" alignItems="center">
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontSize: 22 }}
                  color="text.primary"
                  gutterBottom
                >
                  On Time Arrival
                </Typography>
                <Typography variant="body2">95%</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ minHeight: 113 }}>
          <CardContent>
            <Stack
              direction="column"
              alignItems="center"
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Today (09:30AM - 06:30PM)
              </Typography>
              <Typography variant="body2">Duration: 9h 0m Break: 0m</Typography>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ minHeight: 113 }}>
          <CardContent>
            <Stack direction="column" alignItems="center">
              <Typography
                variant="h4"
                component="div"
                color="text.secondary"
                gutterBottom
              >
                04:04:39 PM
              </Typography>
              <Typography variant="body2">Wed 06, Dec 2023</Typography>
            </Stack>
          </CardContent>
        </Card>
        <Stack direction="column" gap={1}>
          <Button size="small" variant="contained">
            Leave Request
          </Button>
          <Button size="small" variant="contained">
            Work From Home
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default AttendenceStatusCards;
