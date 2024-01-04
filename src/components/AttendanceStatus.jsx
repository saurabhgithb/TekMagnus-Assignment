import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
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
import AttendenceStatusCards from "./AttendenceStatusCards";

const AttendanceStatus = () => {
  const [isCollapse, setIsCollapse] = React.useState(false);
  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <>
      <Box flex={4} p={{ xs: 0, md: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#mySpace">
            My Space
          </Link>
          <Typography color="text.primary">Attendance</Typography>
        </Breadcrumbs>
        <Card sx={{ minWidth: 275, marginTop: "1rem" }}>
          <CardContent>
            <Stack direction="row">
              <Typography component="div" variant="h6" gutterBottom flex={1}>
                Attendance Status
              </Typography>
              <Typography component="div" variant="h6" gutterBottom flex={1}>
                Timings
              </Typography>
              <Typography component="div" variant="h6" gutterBottom flex={1}>
                Action
              </Typography>
            </Stack>
          </CardContent>
          <Stack direction="row" gap={43} alignItems="center">
            <List>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={handleCollapse}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                  }}
                >
                  <ListItemText
                    primary="Last Week"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                    }}
                  >
                    {isCollapse ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <Collapse in={isCollapse}>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#Leave">
                    <ListItemText primary="Last Month" />
                  </ListItemButton>
                </ListItem>
              </Collapse>
            </List>

            <Stack direction="row" gap={2}>
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
          </Stack>
          <AttendenceStatusCards />
        </Card>
      </Box>
    </>
  );
};

export default AttendanceStatus;
