import {
  Box,
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import apiService from "../services/api";

const usersBarItems = [
  { text: "Home", icon: <HomeOutlinedIcon />, path: "/dashboard" },
  {
    text: "Loans",
    icon: <CreditScoreOutlinedIcon />,
    path: "/dashboard/loans",
  },
  { text: "Assets", icon: <SavingsOutlinedIcon />, path: "/dashboard/assets" },
];

const DashboardPage = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [userData, setUserData] = useState(null);
  const [sidebarItems, setSideBarItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    let data = localStorage.getItem("userData");
    if (data) {
      data = JSON.parse(data);
      if (data.cooperativeId) {
        setSideBarItems(usersBarItems);
      }
    }
    setUserData(data);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        bgcolor: "pink",
        flex: 1,
      }}
    >
      <Box
        sx={{
          flex: 1 / 6,
          bgcolor: "primary.main",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: "100%",
              height: "20vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body"
              sx={{
                fontSize: 12,
                fontWeight: "bold",
                mb: 2,
                color: "secondary.main",
              }}
            >
              CoopSaaS
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: 30,
                bgcolor: "secondary.main",
              }}
            ></Box>
          </Box>
          <Divider
            variant="middle"
            color="white"
            sx={{ color: "secondary.main" }}
          />
          <List>
            {sidebarItems.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ p: 0.5 }}>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    mx: 0.5,
                    borderRadius: 1,
                    ...(location.pathname === item.path && {
                      bgcolor: "white",
                      "& .MuiListItemIcon-root": { color: "primary.main" },
                      "& .MuiListItemText-root": { color: "primary.main" },
                    }),
                    "&:hover": {
                      bgcolor: "white",
                      "& .MuiListItemIcon-root": { color: "primary.main" },
                      "& .MuiListItemText-root": { color: "primary.main" },
                      borderRadius: 1,
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ color: "white", fontWeight: "bold" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 5 / 6,
          bgcolor: "secondary.main",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "4vh",
            bgcolor: "#FFF",
            borderBottom: ".5px solid",
            borderColor: "primary.main",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            p: 2.6,
          }}
        >
          <Box
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <IconButton onClick={handleClick}>
              <NotificationsIcon sx={{ color: "primary.main" }} />
            </IconButton>
            <DropDown anchorEl={anchorEl} open={open} onClose={handleClose} />
            <IconButton>
              <AccountCircleIcon sx={{ color: "primary.main" }} />
            </IconButton>
            <IconButton
              onClick={() => {
                apiService.logout();
                navigate("/");
              }}
            >
              <LogoutIcon sx={{ color: "primary.main" }} />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            height: "96vh",
            flex: 1,
            // bgcolor: "pink",
            overflowY: "auto", // Enables scrolling
            scrollbarWidth: "none", // Firefox: hides scrollbar
            "&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari: hides scrollbar
            "-ms-overflow-style": "none", // Edge: hides scrollbar
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

const DropDown = ({ open, anchorEl, onClose }) => {
  return (
    <Menu
      id="long-menu"
      MenuListProps={{
        "aria-labelledby": "long-button",
        sx: { width: 250 },
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      sx={{ width: 300 }}
    >
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem onClick={onClose}>My account</MenuItem>
      <MenuItem onClick={onClose}>Logout</MenuItem>
    </Menu>
  );
};

export default DashboardPage;
