import React from "react";
import StatusCard from "./StatusCard";
import { Box, Collapse, List, ListItemButton, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const AttendanceStatus = () => {
  const [isCollapse, setIsCollapse] = React.useState(false);
  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };
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
        sx={{ marginX: { xs: "auto", md: 0 }, fontSize: "1rem", flex: 1 }}
      >
        Attendence Status
      </Typography>
      <List sx={{ flex: 1 }} disablePadding>
        <ListItemButton
          sx={{
            padding: 0,
            margin: 0,
            justifyContent: open ? "initial" : "center",
            fontSize: "12px",
          }}
          onClick={handleCollapse}
          disableGutters
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              component="p"
              sx={{ opacity: open ? 1 : 0, fontSize: "12px" }}
            >
              Last Week
            </Typography>
            {open ? (
              isCollapse ? (
                <ExpandLess sx={{ width: "22px" }} />
              ) : (
                <ExpandMore sx={{ width: "22px" }} />
              )
            ) : null}
          </Box>
        </ListItemButton>
        {["Today", "Yesterday", "Last Month"].map((text, index) => (
          <Collapse key={index} in={isCollapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ p: 0 }}>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ fontSize: "12px" }}
                >
                  {text}
                </Typography>
              </ListItemButton>
            </List>
          </Collapse>
        ))}
      </List>
      <Box sx={{ flex: 1 }}>
        <StatusCard />
      </Box>
    </Box>
  );
};

export default AttendanceStatus;
