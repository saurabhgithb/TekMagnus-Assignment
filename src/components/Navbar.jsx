import { DarkMode, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  InputBase,
  styled,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    backgroundColor: "transparent",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    color: "black",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  return (
    <Box sx={{ marginY: 2 }}>
      <AppBar position="relative">
        <StyledToolbar>
          <Search>
            <InputBase placeholder="search..." sx={{ color: "black", minWidth: "100%" }} />
          </Search>

          <Icons>
            <Button sx={{minWidth: "1px", padding: "10px 15px",}}>
              <Badge variant="dot" color="error">
                <Notifications />
              </Badge>
            </Button>
            <Button sx={{minWidth: "1px", padding: "10px 15px",}}>
              <Badge variant="dot" color="error">
                <Mail />
              </Badge>
            </Button>
            <Button sx={{minWidth: "1px", padding: "10px 15px",}}>
              <DarkMode />
            </Button>
            <Box sx={{cursor: "pointer"}}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            </Box>
          </Icons>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
