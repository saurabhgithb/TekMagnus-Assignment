import {
  AccessTime,
  KeyboardArrowDown,
  KeyboardArrowUp,
  PieChart,
} from "@mui/icons-material";
import {
  Box,
  Button,
  styled,
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AttendanceStatus = () => {
  const [isCollapse, setIsCollapse] = React.useState(false);
  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <>
      <Box>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#mySpace">
            My Space
          </Link>
          <Typography color="text.primary">Attendance</Typography>
        </Breadcrumbs>

        <Card sx={{ minWidth: 275, marginTop: "1rem", marginX: 1}}>
          <Stack direction="row" gap={2} p={2}>
            {/* Attendence Status */}
            <Stack flex={1} gap={1}>
              <Typography component="div" variant="h6" gutterBottom flex={1}>
                Attendance Status
              </Typography>
              <Stack flex={1}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={handleCollapse}
                >
                  Last Week
                  {isCollapse ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </Typography>

                <Collapse in={isCollapse}>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#Leave">
                      <ListItemText primary="Last Month" />
                    </ListItemButton>
                  </ListItem>
                </Collapse>
              </Stack>
              <Card variant="outlined">
                <CardContent>
                  <Stack direction="row" alignItems="center" gap={2}>
                    <AccessTime />
                    <Stack direction="column" alignItems="center">
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ fontSize: "1.5rem" }}
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
                        sx={{ fontSize: "1.5rem" }}
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
            </Stack>
            {/* Timings */}
            <Stack flex={1} gap={1}>
              <Typography
                component="div"
                variant="h6"
                gutterBottom
                flex={1}
                sx={{ marginX: "auto" }}
              >
                Timings
              </Typography>
              <Stack flex={2} direction="row" gap={2}>
                <Button
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: "50%" }}
                >
                  M
                </Button>
                <Button
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: "50%" }}
                >
                  T
                </Button>
                <Button
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: "50%" }}
                >
                  W
                </Button>
                <Button
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: "50%" }}
                >
                  T
                </Button>
                <Button
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: "50%" }}
                >
                  F
                </Button>
                <Button
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: "50%" }}
                >
                  S
                </Button>
                <Button
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: "50%" }}
                >
                  S
                </Button>
              </Stack>
              <Card variant="outlined">
                <CardContent>
                  <Stack direction="column" alignItems="center">
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "1.5rem" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Today (09:30AM - 06:30PM)
                    </Typography>
                    <Typography variant="body2">
                      Duration: 9h 0m Break: 0m
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
            {/* Action */}
            <Stack flex={1} gap={1}>
              <Typography
                component="div"
                variant="h6"
                gutterBottom
                flex={1}
                sx={{ marginX: "auto" }}
              >
                Action
              </Typography>
              <Stack direction="row" gap={2}>
                <Card variant="outlined" sx={{ flex: 1 }}>
                  <CardContent>
                    <Stack direction="column" alignItems="center">
                      <Typography
                        variant="h5"
                        component="div"
                        color="text.secondary"
                        sx={{ fontSize: "1.5rem" }}
                        gutterBottom
                      >
                        04:04:39 PM
                      </Typography>
                      <Typography variant="body2">Wed 06, Dec 2023</Typography>
                    </Stack>
                  </CardContent>
                </Card>
                <Stack direction="column" gap={1} justifyContent="space-around">
                  <Button size="large" variant="contained">
                    Leave Request
                  </Button>
                  <Button size="large" variant="contained">
                    Work From Home
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default AttendanceStatus;
