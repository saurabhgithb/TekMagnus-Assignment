import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { CalendarToday, List } from "@mui/icons-material";
import { Paper } from "@mui/material";
import LogsTable from "./LogsTable";

const Logs = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={{ xs: "sm", md: "lg" }} sx={{ my: "2rem" }}>
      <Typography
        component="h1"
        variant="h4"
        sx={{ fontSize: "1rem", color: "common.white" }}
      >
        Logs and Request
      </Typography>
      <Box
        sx={{
          display: "flex",
          maxWidth: "20rem",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "10px",
          outline: "1px solid white",
          my: "1rem",
        }}
      >
        <Button
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.light,
            padding: ".5rem",
            fontSize: "12px",
            width: "100%",
            flex: 1,
            borderRadius: "10px 0px 0px 10px",
            textTransform: "none",
          }}
          size="small"
          variant="contained"
        >
          Attendance Log
        </Button>
        <Button
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.light,
            padding: ".5rem",
            fontSize: "12px",
            width: "100%",
            flex: 1,
            borderRadius: "0px 10px 10px 0px",
            textTransform: "none",
            background: "transparent",
          }}
          size="small"
          variant="contained"
        >
          Attendance Request
        </Button>
      </Box>
      <Paper
        sx={{
          color: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.main,
          outline: "1px solid grey",
          marginY: "1rem",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            m: 0,
            px: "10px",
            border: "1px solid grey",
            borderRadius: "5px 5px 0 0",
          }}
        >
          <Typography component="h6" variant="h6" sx={{ fontSize: "1rem" }}>
            December, 2023
          </Typography>
          <Box sx={{ gap: "1rem", display: "flex" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                backgroundColor: theme.palette.primary.main,
                borderRadius: "10px",
                outline: "1px solid white",
                my: "1rem",
              }}
            >
              <Button
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.primary.light,
                  padding: ".5rem 2rem",
                  borderRadius: "10px 0px 0px 10px",
                  textTransform: "none",
                }}
                size="small"
                variant="contained"
              >
                30 Days
              </Button>
              {["Nov", "Oct", "Sep", "Aug", "Jul", "Jun"].map((text, index) => (
                <Button
                  key={index}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.primary.light,
                    padding: ".5rem  2rem",
                    fontWeight: 300,
                    borderRadius: "0px",
                    outline: "1px solid white",
                    textTransform: "none",
                    background: "transparent",
                    ...(index == 5 && {
                      borderRadius: "0px 10px 10px 0px",
                    }),
                  }}
                  size="small"
                  variant="contained"
                >
                  {text}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "10px",
                outline: "1px solid white",
                my: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.primary.light,
                  padding: ".5rem 1rem",
                  borderRadius: "10px 0px 0px 10px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "common.black",
                  },
                }}
              >
                <List sx={{ width: "1rem" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.primary.light,
                  padding: ".5rem 1rem",
                  borderRadius: "0px 10px 10px 0px",
                  background: "transparent",
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "common.black",
                  },
                }}
              >
                <CalendarToday sx={{ width: "1rem" }} />
              </Box>
            </Box>
          </Box>
        </Box>
        <LogsTable />
      </Paper>
    </Container>
  );
};

export default Logs;
