import { DarkMode, Mail, Notifications, SearchOutlined } from "@mui/icons-material";
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
    background:
      "linear-gradient(180deg, rgba(37,36,44,0.6028536414565826) 0%, rgba(38,37,45,1) 95%)",
    color: "white",
    padding: "0 10px",
    borderRadius: 10,
    width: "40%",
    border: "1px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
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
      <AppBar
        position="relative"
        sx={{
          width: "65rem",
          maxWidth: "100%",
          marginX: "auto",
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <StyledToolbar>
          <Search>
            <InputBase
              placeholder="search..."
            />
            <SearchOutlined />
          </Search>

          <Icons>
            <Button sx={{ minWidth: "1px", padding: "10px 15px" }}>
              <Badge variant="dot" color="error">
                <Notifications />
              </Badge>
            </Button>
            <Button sx={{ minWidth: "1px", padding: "10px 15px" }}>
              <Badge variant="dot" color="error">
                <Mail />
              </Badge>
            </Button>
            <Button sx={{ minWidth: "1px", padding: "10px 15px" }}>
              <DarkMode />
            </Button>
            <Box sx={{ cursor: "pointer" }}>
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
