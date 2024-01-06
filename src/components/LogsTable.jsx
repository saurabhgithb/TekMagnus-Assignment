import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { grey } from "@mui/material/colors";
import {
  ErrorOutline,
  HourglassTop,
  InsertEmoticon,
  TaskAlt,
} from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.common.white,

  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    background: "linear-gradient(0deg, #6F6F6F, #3D3D3F)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:nth-of-type(2)": {
    backgroundColor: "#3E3D42",
    opacity: ".8",
  },
  "&:nth-of-type(5)": {
    backgroundColor: "#5F484E",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  date,
  visual,
  effectivehrs,
  grosshrs,
  extrahrs,
  arrival,
  log
) {
  return { date, visual, effectivehrs, grosshrs, extrahrs, arrival, log };
}

const rows = [
  createData(
    "Dec 04, Mon",
    "visual",
    "9h 15m",
    "0h 59m",
    "0h 59m",
    "On Time",
    "warning"
  ),
  createData("Dec 03, Sun", "", "Full day weekly-off", "", "", "", ""),
  createData("Dec 02, Sat", "visual", "8h 59m", "9h 59m", "0h 30m", "", ""),
  createData(
    "Dec 01, Fri",
    "visual",
    "8h 59m",
    "9h 59m",
    "1h 30m",
    "0h 30m late",
    ""
  ),
  createData("Nov 30, Thu", "", "Sick Leave", "", "", "", ""),
];

export default function LogsTable() {
  const theme = useTheme();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Attendence Visual</StyledTableCell>
            <StyledTableCell align="center">Effective Hours</StyledTableCell>
            <StyledTableCell align="center">Gross Hours</StyledTableCell>
            <StyledTableCell align="center">Extra Hours</StyledTableCell>
            <StyledTableCell align="center">Arrival</StyledTableCell>
            <StyledTableCell align="center">Log</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="center">{row.visual}</StyledTableCell>
              <StyledTableCell align="center">
                {row.effectivehrs}
              </StyledTableCell>
              <StyledTableCell align="center">{row.grosshrs}</StyledTableCell>
              <StyledTableCell align="center">{row.extrahrs}</StyledTableCell>
              <StyledTableCell align="center">
                {index == 2 ? (
                  <InsertEmoticon
                    sx={{ color: theme.palette.secondary.main }}
                  />
                ) : (
                  row.arrival
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {index == 0 && (
                  <ErrorOutline sx={{ color: theme.palette.warning.main }} />
                )}
                {index == 2 && (
                  <TaskAlt sx={{ color: theme.palette.success.main }} />
                )}
                {index == 3 && (
                  <HourglassTop sx={{ color: theme.palette.error.main }} />
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
