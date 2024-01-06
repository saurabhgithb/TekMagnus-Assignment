import React from "react";
import Sidebar from "./components/Sidebar";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import MainDashboard from "./components/MainDashboard";
import Navigation from "./components/Navigation";

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: {
      main: "#202026",
      light: "#F3F3F3",
    },
    secondary: {
      main: "#F29C50",
    },
    common: {
      text: "#FFF",
    },
  },
});

const App = () => {
  const [open, setOpen] = React.useState(false);
  const [isCollapse, setIsCollapse] = React.useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar
          open={open}
          setOpen={setOpen}
          isCollapse={isCollapse}
          setIsCollapse={setIsCollapse}
          drawerWidth={drawerWidth}
        />
        <Navigation
          open={open}
          setOpen={setOpen}
          isCollapse={isCollapse}
          setIsCollapse={setIsCollapse}
          drawerWidth={drawerWidth}
        />
        <MainDashboard open={open} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
