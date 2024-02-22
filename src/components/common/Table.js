/* eslint-disable no-unused-vars */
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TableRow from "@mui/material/TableRow";
import { useLocation } from "react-router-dom";

export default function CommonTable({ columns, rows }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageNum = parseInt(searchParams.get("page")) || 0;
  const [page, setPage] = React.useState(pageNum);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const url = new URL(window.location.href);

  const handleChangePage = (e, newPage) => {
    e.preventDefault();
    setPage(newPage - 1);
    url.searchParams.set("page", newPage - 1);
    window.history.pushState({}, "", url);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        border: "1px solid #D9D9D9",
        p: 0.5,
        pl: 2,
        pr: 2,
        boxShadow: "none",
      }}
    >
      <TableContainer sx={{}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow key="23234">
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: "#717273" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack sx={{ p: 1, alignItems: "center" }}>
        <Pagination
          count={5}
          defaultPage={page + 1}
          page={page + 1}
          onChange={handleChangePage}
          showFirstButton
          showLastButton
          color="primary"
        />
      </Stack>
    </Paper>
  );
}
