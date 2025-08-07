import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Avatar,
  Alert,
  InputAdornment,
  IconButton,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  People,
  Google,
  Facebook,
  CheckCircle,
  Description,
  Payment,
  TrendingUp,
} from "@mui/icons-material";
import apiService from "../../services/api";

const SignupPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Organization details
    name: "",
    contactEmail: "",
    contactPhone: "",
    domain: "",
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
    // Initial admin details
    adminFirstName: "",
    adminLastName: "",
    adminEmail: "",
    adminPassword: "",
    confirmPassword: "",
    adminPhone: "",
    adminDateOfBirth: "",
    adminGender: "male",
    adminAddress: {
      street: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    "Organization Information",
    "Organization Address",
    "Admin Details",
    "Account Security",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested object updates (e.g., address.street)
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 0:
        if (!formData.name) newErrors.name = "Organization name is required";
        if (!formData.contactEmail) {
          newErrors.contactEmail = "Contact email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
          newErrors.contactEmail = "Contact email is invalid";
        }
        if (!formData.contactPhone)
          newErrors.contactPhone = "Contact phone is required";
        break;
      case 1:
        if (!formData.address.street)
          newErrors["address.street"] = "Street address is required";
        if (!formData.address.city)
          newErrors["address.city"] = "City is required";
        if (!formData.address.state)
          newErrors["address.state"] = "State is required";
        if (!formData.address.country)
          newErrors["address.country"] = "Country is required";
        if (!formData.address.postalCode)
          newErrors["address.postalCode"] = "Postal code is required";
        break;
      case 2:
        if (!formData.adminFirstName)
          newErrors.adminFirstName = "Admin first name is required";
        if (!formData.adminLastName)
          newErrors.adminLastName = "Admin last name is required";
        if (!formData.adminEmail) {
          newErrors.adminEmail = "Admin email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.adminEmail)) {
          newErrors.adminEmail = "Admin email is invalid";
        }
        if (!formData.adminPhone)
          newErrors.adminPhone = "Admin phone is required";
        if (!formData.adminDateOfBirth)
          newErrors.adminDateOfBirth = "Admin date of birth is required";
        if (!formData.adminAddress.street)
          newErrors["adminAddress.street"] = "Admin street address is required";
        if (!formData.adminAddress.city)
          newErrors["adminAddress.city"] = "Admin city is required";
        if (!formData.adminAddress.state)
          newErrors["adminAddress.state"] = "Admin state is required";
        if (!formData.adminAddress.country)
          newErrors["adminAddress.country"] = "Admin country is required";
        if (!formData.adminAddress.postalCode)
          newErrors["adminAddress.postalCode"] =
            "Admin postal code is required";
        break;
      case 3:
        if (!formData.adminPassword) {
          newErrors.adminPassword = "Admin password is required";
        } else if (formData.adminPassword.length < 6) {
          newErrors.adminPassword =
            "Admin password must be at least 6 characters";
        }
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.adminPassword !== formData.confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match";
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked, activeStep:", activeStep);

    if (!validateStep(activeStep)) {
      console.log("Validation failed for step:", activeStep);
      return;
    }

    console.log("Validation passed, starting submission...");
    setIsLoading(true);
    setErrors({});

    try {
      // Prepare tenant registration data
      const registrationData = {
        name: formData.name,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
        domain: formData.domain,
        address: formData.address,
        adminFirstName: formData.adminFirstName,
        adminLastName: formData.adminLastName,
        adminEmail: formData.adminEmail,
        adminPassword: formData.adminPassword,
        adminPhone: formData.adminPhone,
        adminDateOfBirth: formData.adminDateOfBirth,
        adminGender: formData.adminGender,
        adminAddress: formData.adminAddress,
      };

      console.log("Calling API with data:", registrationData);
      const response = await apiService.registerTenant(registrationData);
      console.log("API response:", response);

      // Store tenant data
      localStorage.setItem("tenantData", JSON.stringify(response.data.tenant));

      // Show success message and navigate to login page
      alert(
        "Organization registered successfully! You can now login with your admin credentials."
      );
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({
        general:
          error.message || "Failed to create organization. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider) => {
    console.log(`Signing up with ${provider}`);
    // Implement social signup logic here
  };

  const features = [
    {
      icon: <Description sx={{ fontSize: 24 }} />,
      title: "Member Management",
      description:
        "Create and manage member profiles with bulk upload capabilities",
    },
    {
      icon: <Payment sx={{ fontSize: 24 }} />,
      title: "Loan Processing",
      description:
        "Complete loan lifecycle management with automated calculations",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 24 }} />,
      title: "Analytics & Reporting",
      description: "Real-time dashboards and comprehensive financial reports",
    },
  ];

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#111827", mb: 3 }}
            >
              Organization Information
            </Typography>
            <TextField
              fullWidth
              label="Organization Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              fullWidth
              label="Contact Email"
              name="contactEmail"
              type="email"
              value={formData.contactEmail}
              onChange={handleChange}
              error={!!errors.contactEmail}
              helperText={errors.contactEmail}
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              fullWidth
              label="Contact Phone"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              error={!!errors.contactPhone}
              helperText={errors.contactPhone}
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              fullWidth
              label="Domain (Optional)"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              error={!!errors.domain}
              helperText={errors.domain}
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#111827", mb: 3 }}
            >
              Organization Address
            </Typography>
            <TextField
              fullWidth
              label="Street Address"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              error={!!errors["address.street"]}
              helperText={errors["address.street"]}
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                label="City"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                error={!!errors["address.city"]}
                helperText={errors["address.city"]}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
              <TextField
                fullWidth
                label="State"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                error={!!errors["address.state"]}
                helperText={errors["address.state"]}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                label="Country"
                name="address.country"
                value={formData.address.country}
                onChange={handleChange}
                error={!!errors["address.country"]}
                helperText={errors["address.country"]}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
              <TextField
                fullWidth
                label="Postal Code"
                name="address.postalCode"
                value={formData.address.postalCode}
                onChange={handleChange}
                error={!!errors["address.postalCode"]}
                helperText={errors["address.postalCode"]}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#111827", mb: 3 }}
            >
              Admin Details
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <TextField
                fullWidth
                label="Admin First Name"
                name="adminFirstName"
                value={formData.adminFirstName}
                onChange={handleChange}
                error={!!errors.adminFirstName}
                helperText={errors.adminFirstName}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
              <TextField
                fullWidth
                label="Admin Last Name"
                name="adminLastName"
                value={formData.adminLastName}
                onChange={handleChange}
                error={!!errors.adminLastName}
                helperText={errors.adminLastName}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Box>
            <TextField
              fullWidth
              label="Admin Email"
              name="adminEmail"
              type="email"
              value={formData.adminEmail}
              onChange={handleChange}
              error={!!errors.adminEmail}
              helperText={errors.adminEmail}
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              fullWidth
              label="Admin Phone"
              name="adminPhone"
              value={formData.adminPhone}
              onChange={handleChange}
              error={!!errors.adminPhone}
              helperText={errors.adminPhone}
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              fullWidth
              label="Date of Birth"
              name="adminDateOfBirth"
              type="date"
              value={formData.adminDateOfBirth}
              onChange={handleChange}
              error={!!errors.adminDateOfBirth}
              helperText={errors.adminDateOfBirth}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              fullWidth
              select
              label="Gender"
              name="adminGender"
              value={formData.adminGender}
              onChange={handleChange}
              error={!!errors.adminGender}
              helperText={errors.adminGender}
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </TextField>
            <Typography variant="h6" sx={{ color: "#111827", mb: 2, mt: 3 }}>
              Admin Address
            </Typography>
            <TextField
              fullWidth
              label="Street Address"
              name="adminAddress.street"
              value={formData.adminAddress.street}
              onChange={handleChange}
              error={!!errors["adminAddress.street"]}
              helperText={errors["adminAddress.street"]}
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                label="City"
                name="adminAddress.city"
                value={formData.adminAddress.city}
                onChange={handleChange}
                error={!!errors["adminAddress.city"]}
                helperText={errors["adminAddress.city"]}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
              <TextField
                fullWidth
                label="State"
                name="adminAddress.state"
                value={formData.adminAddress.state}
                onChange={handleChange}
                error={!!errors["adminAddress.state"]}
                helperText={errors["adminAddress.state"]}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                label="Country"
                name="adminAddress.country"
                value={formData.adminAddress.country}
                onChange={handleChange}
                error={!!errors["adminAddress.country"]}
                helperText={errors["adminAddress.country"]}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
              <TextField
                fullWidth
                label="Postal Code"
                name="adminAddress.postalCode"
                value={formData.adminAddress.postalCode}
                onChange={handleChange}
                error={!!errors["adminAddress.postalCode"]}
                helperText={errors["adminAddress.postalCode"]}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Box>
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#111827", mb: 2 }}
            >
              Account Security
            </Typography>
            <TextField
              fullWidth
              label="Admin Password"
              name="adminPassword"
              type={showPassword ? "text" : "password"}
              value={formData.adminPassword}
              onChange={handleChange}
              error={!!errors.adminPassword}
              helperText={errors.adminPassword}
              margin="dense"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ color: "#9CA3AF" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              margin="dense"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                      sx={{ color: "#9CA3AF" }}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* Debug button - remove this later */}
            <Button
              variant="outlined"
              onClick={() => console.log("Form data:", formData)}
              sx={{ mt: 2 }}
            >
              Debug: Log Form Data
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex" }}>
      {/* Left Panel - Promotional Content */}
      <Box
        sx={{
          flex: 1,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "30%",
            right: "15%",
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "60%",
            left: "20%",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
          }}
        />

        <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              CoopSaaS
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9, mb: 6 }}>
              Join thousands of cooperatives using CoopSaaS
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  p: 3,
                  borderRadius: 2,
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "rgba(255,255,255,0.2)",
                    color: "white",
                    width: 48,
                    height: 48,
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Right Panel - Signup Form */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#F9FAFB",
          p: 4,
          overflow: "auto",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            borderRadius: 3,
            width: "100%",
            maxWidth: 500,
            maxHeight: "90vh",
            overflow: "auto",
            border: "1px solid #E5E7EB",
          }}
        >
          {/* Logo and Title */}
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#111827" }}
            >
              Create Your Account
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ color: "#6B7280" }}
            >
              Join thousands of cooperatives using CoopSaaS
            </Typography>
          </Box>

          {/* Stepper */}
          <Stepper
            activeStep={activeStep}
            sx={{
              mb: 4,
              "& .MuiStepLabel-root": {
                fontSize: "0.75rem",
              },
              "& .MuiStepLabel-label": {
                fontSize: "0.75rem",
                lineHeight: 1.2,
              },
              "& .MuiStepIcon-root": {
                fontSize: "1.25rem",
              },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Error Alert */}
          {errors.general && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {errors.general}
            </Alert>
          )}

          {/* Form Content */}
          <Box component="form" onSubmit={handleSubmit}>
            {renderStepContent(activeStep)}

            {/* Navigation Buttons */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                sx={{
                  borderColor: "#E5E7EB",
                  color: "#374151",
                  "&:hover": {
                    borderColor: "#D1D5DB",
                    bgcolor: "#F9FAFB",
                  },
                }}
              >
                Back
              </Button>

              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isLoading}
                  startIcon={isLoading ? null : <CheckCircle />}
                  sx={{
                    bgcolor: "#3B82F6",
                    "&:hover": {
                      bgcolor: "#2563EB",
                    },
                  }}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    bgcolor: "#3B82F6",
                    "&:hover": {
                      bgcolor: "#2563EB",
                    },
                  }}
                >
                  Next
                </Button>
              )}
            </Box>
          </Box>

          {/* Divider */}
          <Divider sx={{ my: 4 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#6B7280" }}
            >
              OR
            </Typography>
          </Divider>

          {/* Social Signup Buttons */}
          <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Google />}
              onClick={() => handleSocialSignup("Google")}
              sx={{
                textTransform: "none",
                borderColor: "#E5E7EB",
                color: "#374151",
                py: 1.5,
                borderRadius: 2,
                "&:hover": {
                  borderColor: "#D1D5DB",
                  bgcolor: "#F9FAFB",
                },
              }}
            >
              Continue with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Facebook />}
              onClick={() => handleSocialSignup("Facebook")}
              sx={{
                textTransform: "none",
                borderColor: "#E5E7EB",
                color: "#374151",
                py: 1.5,
                borderRadius: 2,
                "&:hover": {
                  borderColor: "#D1D5DB",
                  bgcolor: "#F9FAFB",
                },
              }}
            >
              Continue with Facebook
            </Button>
          </Box>

          {/* Sign In Link */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "#6B7280" }}>
              Already have an account?{" "}
              <Link
                href="/login"
                sx={{
                  color: "#3B82F6",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignupPage;
