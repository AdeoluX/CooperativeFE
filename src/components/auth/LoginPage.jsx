import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../services/api";

const LoginPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const org = await apiService.getOrgId();
      const response = await apiService.login({ email, password }, org._id);
      console.log(response);
      if (response.success) {
        navigate("/dashboard");
      } else {
        setSnackbarMessage(response.data.message || "Cooperative not found");
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarMessage("An error occurred while searching");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        flex: 1,
        p: 5,
        display: "flex",
        height: "80vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", mb: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body"
            sx={{
              textAlign: "left",
              color: "primary.main",
              mb: 1,
              fontWeight: "bold",
            }}
          >
            CoopSaas
          </Typography>
          <Typography
            variant="body"
            sx={{
              textAlign: "left",
              color: "primary.black",
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            Welcome back! Sign into your account, we've been waiting for you!
          </Typography>
        </Box>
      </Box>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ width: "100%", mb: 2 }}
        value={email}
        onChange={handleChangeEmail}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        sx={{ width: "100%", mb: 2 }}
        value={password}
        onChange={handleChangePassword}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            height: 35,
            width: "25%",
            boxShadow: "none",
            color: "primary.main",
            fontSize: 10,
            "&:focus": {
              outline: "none",
            },
          }}
          onClick={() => navigate("/auth/search")}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{
            height: 35,
            width: "25%",
            boxShadow: "none",
            color: "secondary.main",
            fontSize: 10,
            "&:focus": {
              outline: "none",
            },
            ":hover": {
              backgroundColor: "primary.main",
              color: "secondary.main",
              boxShadow: "none",
            },
          }}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;
