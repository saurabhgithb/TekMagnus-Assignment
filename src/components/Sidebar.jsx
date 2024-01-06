import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  ArrowBack,
  ArrowForward,
  BarChart,
  ExpandLess,
  ExpandMore,
  Home,
} from "@mui/icons-material";
import { Collapse } from "@mui/material";

const openedMixin = (theme, drawerWidth) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  overflow: "visible",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  overflow: "visible",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, open, drawerWidth }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    "& .MuiDrawer-paper": openedMixin(theme, drawerWidth),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ open, setOpen, isCollapse, setIsCollapse, drawerWidth }) => {
  const theme = useTheme();

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
    if (isCollapse === open) {
      setOpen(true);
    }
  };

  const handleDrawerClose = () => {
    setOpen(!open);
    setIsCollapse(false);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: theme.palette.primary.main }}>
      <CssBaseline />
      <Drawer drawerWidth={drawerWidth} variant="permanent" open={open}>
        <DrawerHeader sx={{ marginTop: "2rem" }}>
          {open ? (
            <Typography component="h1" variant="h4" sx={{ fontWeight: "300" }}>
              KRISP
            </Typography>
          ) : (
            <Typography component="h1" variant="h3" sx={{ fontWeight: "300" }}>
              K
            </Typography>
          )}
        </DrawerHeader>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginY: "2rem",
            right: 0,
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: "2px",
              width: "100%",
              backgroundColor: "whitesmoke",
            }}
          ></Box>
          <Box
            onClick={handleDrawerClose}
            sx={{
              position: "absolute",
              right: "-11px",
              top: "-11.5px",
              cursor: "pointer",
            }}
          >
            {open ? (
              <ArrowBack
                sx={{
                  width: "24px",
                  height: "24px",
                  color: "black",
                  backgroundColor: "whitesmoke",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <ArrowForward
                sx={{
                  width: "24px",
                  height: "24px",
                  color: "black",
                  backgroundColor: "whitesmoke",
                  borderRadius: "50%",
                }}
              />
            )}
          </Box>
        </Box>

        <List>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              borderRadius: "0 100vw 100vw 0",
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.light,
              my: "10px",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: theme.palette.primary.light,
                }}
              >
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: "block",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                borderRadius: "0 100vw 100vw 0",
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.light,
                "&: hover": {
                  backgroundColor: theme.palette.secondary.light,
                },
              }}
              onClick={handleCollapse}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: theme.palette.primary.light,
                }}
              >
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="My Space" sx={{ opacity: open ? 1 : 0 }} />
              {open ? isCollapse ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItemButton>
            {["Leave", "Attendance", "Expense & Travel", "Help Desk"].map(
              (text, index) => (
                <Collapse
                  key={index}
                  in={isCollapse}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </List>
                </Collapse>
              )
            )}
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
