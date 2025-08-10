import {
  Box,
  Button,
  Divider,
  Grid,
  Icon,
  Paper,
  Typography,
} from "@mui/material";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RecyclingSharpIcon from "@mui/icons-material/RecyclingSharp";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import React from "react";

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

const activities = [
  {
    id: 1,
    icon: <KeyboardDoubleArrowUpOutlinedIcon />,
    description: "Contribution to Coop",
    date: "January 10, 2025",
    amount: "500",
  },
  {
    id: 1,
    icon: <KeyboardDoubleArrowUpOutlinedIcon />,
    description: "Contribution to Coop",
    date: "January 10, 2025",
    amount: "500",
  },
  {
    id: 1,
    icon: <KeyboardDoubleArrowUpOutlinedIcon />,
    description: "Contribution to Coop",
    date: "January 10, 2025",
    amount: "500",
  },
  {
    id: 1,
    icon: <KeyboardDoubleArrowUpOutlinedIcon />,
    description: "Contribution to Coop",
    date: "January 10, 2025",
    amount: "500",
  },
  {
    id: 1,
    icon: <KeyboardDoubleArrowUpOutlinedIcon />,
    description: "Contribution to Coop",
    date: "January 10, 2025",
    amount: "500",
  },
  {
    id: 1,
    icon: <KeyboardDoubleArrowUpOutlinedIcon />,
    description: "Contribution to Coop",
    date: "January 10, 2025",
    amount: "500",
  },
  {
    id: 1,
    icon: <KeyboardDoubleArrowUpOutlinedIcon />,
    description: "Contribution to Coop",
    date: "January 10, 2025",
    amount: "500",
  },
  {
    id: 1,
    icon: <KeyboardDoubleArrowUpOutlinedIcon />,
    description: "Contribution to Coop",
    date: "January 10, 2025",
    amount: "500",
  },
  {
    id: 1,
    icon: <KeyboardDoubleArrowUpOutlinedIcon />,
    description: "Contribution to Coop",
    date: "January 10, 2025",
    amount: "500",
  },
];

const HomePage = () => {
  return (
    <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <Box
        sx={{
          height: "22vh",
          display: "flex", // Corrected: Set display to flex
          alignItems: "center", // Corrected: Center items vertically
          justifyContent: "center", // Corrected: Center items horizontally
          p: 2,
        }}
      >
        <Grid container spacing={3} sx={{ width: "100%" }}>
          {cardList.map((item) => (
            <Grid item size={3} xs={12} sm={6} md={4}>
              <Paper
                variant="outlined"
                sx={{
                  height: "18vh",
                  width: "99%",
                  borderRadius: 1,
                  borderColor: "primary.main",
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
      <Box
        sx={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid size={8}>
            <Paper
              variant="outlined"
              sx={{
                width: "100%",
                height: "47vh",
                borderColor: "primary.main",
                flexDirection: "column",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "6.5vh",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  px: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "primary.black", fontWeight: "bold" }}
                >
                  Recent Activity
                </Typography>
              </Box>
              <Divider variant="fullWidth" sx={{ bgcolor: "primary.main" }} />
              <Box
                sx={{
                  width: "100%",
                  height: "40vh", // Fixed height for the scrollable area
                  overflowY: "auto", // Enable vertical scrolling
                  scrollbarWidth: "none", // Firefox: slim scrollbar
                  "&::-webkit-scrollbar": { width: "6px" }, // Chrome/Safari: slim scrollbar
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "primary.main",
                    borderRadius: "4px",
                  },
                }}
              >
                {/* Green boxes */}
                {activities.map((_) => (
                  <Activity
                    amount={_.amount}
                    date={_.date}
                    description={_.description}
                    icon={_.icon}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
          <Grid size={4}>
            <Paper
              variant="outlined"
              sx={{
                width: "100%",
                height: "47vh",
                borderColor: "primary.main",
                flexDirection: "column",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 50,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  px: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "primary.black", fontWeight: "bold" }}
                >
                  Quick Actions
                </Typography>
              </Box>
              <Divider variant="fullWidth" sx={{ bgcolor: "primary.main" }} />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 3,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 50,
                    bgcolor: "primary.main",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    my: 1,
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => alert("contribute")}
                >
                  <Icon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mr: 1,
                    }}
                  >
                    <AddSharpIcon sx={{ color: "secondary.main" }} />
                  </Icon>
                  <Typography
                    variant="text1"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "secondary.main",
                    }}
                  >
                    Make Contribution
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: 50,
                    bgcolor: "secondary.main",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "row",
                    border: 1,
                    borderColor: "primary.main",
                    alignItems: "center",
                    justifyContent: "center",
                    my: 1,
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => alert("contribute")}
                >
                  <Icon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mr: 1,
                    }}
                  >
                    <CreditCardOutlinedIcon sx={{ color: "primary.main" }} />
                  </Icon>
                  <Typography
                    variant="text1"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "primary.main",
                    }}
                  >
                    Request Loan
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: 50,
                    bgcolor: "secondary.main",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "row",
                    border: 1,
                    borderColor: "primary.main",
                    alignItems: "center",
                    justifyContent: "center",
                    my: 1,
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => alert("contribute")}
                >
                  <Icon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mr: 1,
                    }}
                  >
                    <SavingsOutlinedIcon sx={{ color: "primary.main" }} />
                  </Icon>
                  <Typography
                    variant="text1"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "primary.main",
                    }}
                  >
                    New Investment
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: 50,
                    bgcolor: "secondary.main",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "row",
                    border: 1,
                    borderColor: "primary.main",
                    alignItems: "center",
                    justifyContent: "center",
                    my: 1,
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => alert("contribute")}
                >
                  <Icon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mr: 1,
                    }}
                  >
                    <RecyclingSharpIcon sx={{ color: "primary.main" }} />
                  </Icon>
                  <Typography
                    variant="text1"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "primary.main",
                    }}
                  >
                    Create Rosca
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Assets */}
      <Box
        sx={{
          height: "45vh",
          //   bgcolor: "green",
        }}
      ></Box>
    </Box>
  );
};

export default HomePage;

const Activity = ({ icon, description, date, amount }) => {
  return (
    <>
      <Divider />
      <Box
        sx={{
          height: "6vh",
          width: "100%",
          borderColor: "primary.main",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          px: 2,
        }}
      >
        <Box sx={{ width: "10%", bgcolor: "white" }}>
          <Box
            sx={{
              bgcolor: "primary.main",
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 35 / 2,
            }}
          >
            <Icon sx={{ display: "flex", color: "secondary.main" }}>
              {icon}
            </Icon>
          </Box>
        </Box>
        <Box sx={{ width: "80%" }}>
          <Typography
            variant="body2"
            sx={{
              color: "primary.black",
              fontSize: 13,
              fontWeight: "bold",
            }}
          >
            {description}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: 12, fontWeight: "bold", color: "primary.black" }}
          >
            {date}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "10%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography>{amount}</Typography>
        </Box>
      </Box>
    </>
  );
};
