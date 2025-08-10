import {
  Box,
  Grid,
  Paper,
  Typography,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";

import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RecyclingSharpIcon from "@mui/icons-material/RecyclingSharp";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import React from "react";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
const cardList = [
  {
    key: "1",
    name: "Total Balance",
    icon: <AccountBalanceOutlinedIcon />,
    amount: 12450,
  },
  {
    key: "2",
    name: "Active Loans",
    icon: <CreditCardOutlinedIcon />,
    amount: 3,
  },
  {
    key: "3",
    name: "Investments",
    icon: <SavingsOutlinedIcon />,
    amount: 25800,
  },
  {
    key: "4",
    name: "Cooperatives",
    icon: <PeopleAltOutlinedIcon />,
    amount: 5,
  },
];
function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const TransactionPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            height: "19vh",
            bgcolor: "secondary.main",
            display: "flex", // Corrected: Set display to flex
            alignItems: "center", // Corrected: Center items vertically
            justifyContent: "center", // Corrected: Center items horizontally
            p: 2,
            borderRadius: 1,
            border: "1px solid",
          }}
        >
          <Grid container spacing={3} sx={{ width: "100%" }}>
            {cardList.map((item) => (
              <Grid item size={3} xs={12} sm={6} md={4}>
                <Paper
                  variant="none"
                  sx={{
                    height: "15vh",
                    width: "99%",
                    borderRadius: 1,
                    borderColor: "primary.main",
                    bgcolor: "#f9fafb",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    p: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      //   boxShadow: 2,
                      //   transform: "scale(1.02)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: 13,
                          fontWeight: "bold",
                          color: "primary.black",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "primary.black",
                        }}
                      >
                        {item.amount}
                      </Typography>
                    </Box>
                    <Icon
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: "primary.main",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                        color: "secondary.main",
                      }}
                    >
                      {item.icon}
                    </Icon>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            height: "65vh",
            width: "100%",
            // bgcolor: "yellow",
            border: "1px solid",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              height: "6vh",
              width: "100%",
              borderBottom: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              px: 2,
            }}
          >
            <Box sx={{ flex: 0.55 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: 14, fontWeight: "bold" }}
              >
                Transaction History
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 0.45,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <input
                style={{
                  height: 30,
                  width: "50%",
                  marginRight: 4,
                  outline: "none",
                  border: "none",
                  paddingLeft: 5,
                  paddingRight: 5,
                  fontWeight: "bold",
                }}
                placeholder="Search Transactions"
              />
              <select
                style={{
                  height: 30,
                  width: "22%",
                  marginRight: 4,
                  border: "none",
                  outline: "none",
                  fontWeight: "bold",
                  color: "secondary.main",
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >
                <option value="Types">Types</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <select
                style={{
                  height: 30,
                  width: "28%",
                  border: "none",
                  outline: "none",
                  paddingLeft: 5,
                  paddingRight: 5,
                  fontWeight: "bold",
                  color: "secondary.main",
                }}
              >
                <option value="Last 30 days">Last 30 days</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </Box>
          </Box>
          {/* Table goes here */}
          <Box sx={{ height: "58.6vh", width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
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
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionPage;
