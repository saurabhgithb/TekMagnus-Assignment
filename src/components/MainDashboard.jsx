import { Box, Typography, styled } from "@mui/material";
import React from "react";
import MySpace from "./MySpace";
import Logs from "./Logs";

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MainDashboard = ({
  open,
  setOpen,
  isCollapse,
  setIsCollapse,
  drawerWidth,
}) => {
  return (
    <>
      <Main drawerWidth={drawerWidth} open={open}>
        <DrawerHeader />
        <MySpace />
        <Logs />
      </Main>
    </>
  );
};

export default MainDashboard;