import { Box, Container, Paper, Typography, useTheme } from "@mui/material";

import { Button } from "@mui/material";
import React from "react";

const ActionCard = () => {
  const theme = useTheme();
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ marginY: "1rem", px: "10px" }}
        disableGutters
      >
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "flex-end",
            justifyContent: "center",
            flex: 2,
            marginTop: 0,
            width: "100%",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              backgroundColor: "#242329",
              color: "common.white",
              padding: "5px 0rem",
              textAlign: "center",
              borderRadius: "10px",
              width: "100%",
              flex: 2,
            }}
          >
            <Typography
              component="h4"
              variant="h4"
              sx={{ fontWeight: 300, fontSize: "2rem", m: 0, p: 0 }}
            >
              04:04:39 PM
            </Typography>
            <Typography
              component="p"
              variant="body2"
              sx={{ fontWeight: 300, fontSize: ".9rem", marginTop: "10px" }}
            >
              Wed 06, Dec 2023
            </Typography>
          </Paper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              color: theme.palette.primary.main,
              flex: 1,
            }}
          >
            <Button
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                width: "100%",
                padding: ".25rem",
                fontSize: "12px",
                flex: 1,
                "&:hover": {
                  color: "common.white",
                },
              }}
              size="small"
              variant="contained"
            >
              Leave Request
            </Button>
            <Button
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                padding: ".5rem",
                fontSize: "12px",
                width: "100%",
                flex: 1,
                "&:hover": {
                  color: "common.white",
                },
              }}
              size="small"
              variant="contained"
            >
              Work From Home
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ActionCard;
