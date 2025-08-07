import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Avatar,
  LinearProgress,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  People,
  AccountBalance,
  Payment,
  Assessment,
} from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Sample data for charts
const lineChartData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
];

const barChartData = [
  { name: "Loans", value: 400 },
  { name: "Contributions", value: 300 },
  { name: "Members", value: 200 },
  { name: "Payments", value: 278 },
];

// Sample data for the table
const tableData = [
  {
    id: 1,
    date: "2024-01-15",
    description: "Member Contribution",
    amount: 500,
    status: "Completed",
  },
  {
    id: 2,
    date: "2024-01-14",
    description: "Loan Payment",
    amount: 1200,
    status: "Pending",
  },
  {
    id: 3,
    date: "2024-01-13",
    description: "New Member Fee",
    amount: 250,
    status: "Completed",
  },
  {
    id: 4,
    date: "2024-01-12",
    description: "Loan Disbursement",
    amount: 5000,
    status: "Processing",
  },
  {
    id: 5,
    date: "2024-01-11",
    description: "Monthly Contribution",
    amount: 300,
    status: "Completed",
  },
];

const StatCard = ({ title, value, change, icon, color }) => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box>
          <Typography color="textSecondary" gutterBottom variant="body2">
            {title}
          </Typography>
          <Typography variant="h4" component="div" fontWeight="bold">
            {value}
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            {change >= 0 ? (
              <TrendingUp
                sx={{ color: "success.main", fontSize: 16, mr: 0.5 }}
              />
            ) : (
              <TrendingDown
                sx={{ color: "error.main", fontSize: 16, mr: 0.5 }}
              />
            )}
            <Typography
              variant="body2"
              color={change >= 0 ? "success.main" : "error.main"}
            >
              {change >= 0 ? "+" : ""}
              {change}
            </Typography>
          </Box>
        </Box>
        <Avatar sx={{ bgcolor: color, width: 56, height: 56 }}>{icon}</Avatar>
      </Box>
    </CardContent>
  </Card>
);

const DashboardContent = () => {
  return (
    <Box>
      {/* Statistics Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Members"
            value="13,115"
            change={385}
            icon={<People />}
            color="primary.main"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Loans"
            value="2,847"
            change={-45}
            icon={<AccountBalance />}
            color="success.main"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Contributions"
            value="$1.2M"
            change={12500}
            icon={<Payment />}
            color="warning.main"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Loan Portfolio"
            value="$3.8M"
            change={8900}
            icon={<Assessment />}
            color="info.main"
          />
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Financial Overview
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#1976d2"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Activity Summary
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Transactions Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Transactions
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell align="right">
                      ${row.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        color={
                          row.status === "Completed"
                            ? "success"
                            : row.status === "Pending"
                            ? "warning"
                            : "info"
                        }
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardContent;
