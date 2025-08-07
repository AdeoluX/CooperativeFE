import { Box, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import cooperativeImage from "../../assets/cooperative.jpg";

const AuthLayoutPage = () => {
  return (
    <Box
      sx={{ display: "flex", flex: 1, height: "100vh", flexDirection: "row" }}
    >
      <Box sx={{ flex: 0.7, overflow: "hidden", position: "relative" }}>
        <img
          src={cooperativeImage}
          alt="Cooperative Management"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{ flex: 0.3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthLayoutPage;
