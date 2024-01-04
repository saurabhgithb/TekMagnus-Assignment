import {
  AccessTime,
  KeyboardArrowDown,
  KeyboardArrowUp,
  PieChart,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Breadcrumbs,
  Card,
  CardContent,
  Collapse,
  Link,
  ListItem,
  ListItemButton,
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

        <Card sx={{ minWidth: 275, marginTop: "1rem", marginX: 1 }}>
          <Stack direction="row" gap={2} p={2}>
            {/* Attendence Status */}
            <Stack flex={2} gap={1}>
              <Typography flex={1} component="div" variant="h6" gutterBottom>
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
              <Box flex={1}>
                <Card
                  sx={{ height: "8rem", maxHeight: "100%-10" }}
                  variant="outlined"
                >
                  <CardContent>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      gap={2}
                    >
                      <Stack direction="row" alignItems="center" gap={2}>
                        <AccessTime />
                        <Stack direction="column" alignItems="center">
                          <Typography
                            variant="h6"
                            component="div"
                            sx={{
                              fontSize: "1.25rem",
                              textAlign: "center",
                              fontWeight: 300,
                            }}
                            color="text.primary"
                          >
                            Avg hrs/Days
                          </Typography>
                          <Typography variant="body2">(6hrs 48min)</Typography>
                        </Stack>
                      </Stack>
                      <Stack direction="row" alignItems="center" gap={2}>
                        <PieChart />
                        <Stack direction="column" alignItems="center">
                          <Typography
                            variant="h6"
                            component="div"
                            sx={{
                              fontSize: "1.25rem",
                              textAlign: "center",
                              fontWeight: 300,
                            }}
                            color="text.primary"
                          >
                            On Time Arrival
                          </Typography>
                          <Typography variant="body2">(6hrs 48min)</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Stack>
            {/* Timings */}
            <Stack flex={1} gap={1}>
              <Typography
                component="div"
                variant="h6"
                gutterBottom
                sx={{ marginX: "auto" }}
              >
                Timings
              </Typography>
              <Stack flex={1} direction="row" gap={1}>
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
              <Box flex={1}>
                <Card
                  sx={{ height: "8rem", maxHeight: "100%-10" }}
                  variant="outlined"
                >
                  <CardContent>
                    <Stack direction="column" alignItems="center">
                      <Typography
                        variant="p"
                        component="div"
                        sx={{ fontSize: "1rem" }}
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
              </Box>
            </Stack>
            {/* Action */}
            <Stack
              flex={2}
              gap={1}
              justifyContent="space-between"
              justifyItems="space-between"
            >
              <Typography
                component="div"
                variant="h6"
                gutterBottom
                sx={{ marginX: "auto" }}
              >
                Action
              </Typography>
              <Stack direction="row" gap={2}>
                <Box flex={2}>
                  <Card
                    sx={{ height: "8rem", maxHeight: "100%-10" }}
                    variant="outlined"
                  >
                    <CardContent>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="space-around"
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          color="text.secondary"
                          sx={{ fontSize: "2rem", fontWeight: 100 }}
                          gutterBottom
                        >
                          04:04:39 PM
                        </Typography>
                        <Typography variant="body2">
                          Wed 06, Dec 2023
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Box>
                <Stack
                  flex={1}
                  direction="column"
                  gap={1}
                  justifyContent="space-around"
                >
                  <Button size="small" variant="contained">
                    Leave Request
                  </Button>
                  <Button size="small" variant="contained">
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
