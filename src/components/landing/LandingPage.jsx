import {
  Box,
  Typography,
  AppBar,
  Container,
  Toolbar,
  Avatar,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatIcon from "@mui/icons-material/Chat";
import LockIcon from "@mui/icons-material/Lock";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import React from "react";
import chartImage from "../../assets/chart.jpg";

const featureData = [
  {
    icon: <PeopleIcon />,
    title: "Member Management",
    description:
      "Easily manage members and their roles with advanced tools that adapt to your cooperative's needs.",
  },
  {
    icon: <BarChartIcon />,
    title: "Resource Analytics",
    description:
      "Gain data-driven insights with powerful analytics to optimize resource allocation and performance.",
  },
  {
    icon: <ChatIcon />,
    title: "Communication Tools",
    description:
      "Enhance member engagement with seamless communication features and real-time updates.",
  },
  {
    icon: <LockIcon />,
    title: "Secure Data",
    description:
      "Protect your cooperative's data with enterprise-grade encryption and compliance standards.",
  },
  {
    icon: <SettingsInputComponentIcon />,
    title: "Integration",
    description:
      "Connect seamlessly with existing tools and platforms through our robust API.",
  },
  {
    icon: <SupportAgentIcon />,
    title: "24/7 Support",
    description:
      "Get help whenever you need it with our dedicated support team and comprehensive documentation.",
  },
];

const testimonials = [
  {
    rating: "★★★★★",
    quote:
      "CoopSaaS has revolutionized how we manage our cooperative. The member analytics have helped us boost engagement by 35%.",
    author: "Jane Doe",
    title: "CEO, CoopUnity",
  },
  {
    rating: "★★★★★",
    quote:
      "The automation features saved us countless hours. Our team can now focus on strategic growth instead of repetitive tasks.",
    author: "John Smith",
    title: "CTO, GreenCoop",
  },
  {
    rating: "★★★★★",
    quote:
      "Implementation was seamless, and the support team is exceptional. CoopSaaS integrates perfectly with our existing systems.",
    author: "Emily Brown",
    title: "VP Operations, SharePros",
  },
];

const LandingPage = () => {
  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#FFF",
          borderBottom: "1px solid #FFB300",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ flexGrow: 1 }}
            >
              <Avatar sx={{ bgcolor: "primary.main", width: 20, height: 20 }}>
                {/* <People /> */}
              </Avatar>
              <Typography variant="h7" fontWeight="bold" color="primary">
                CoopSaaS
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  color: "#374151",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Features
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  color: "#374151",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Pricing
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  color: "#374151",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Security
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  color: "#374151",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Contact
              </Typography>
            </Box>
            {/* <Toolbar disableGutters></Toolbar> */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, ml: 3 }}>
              <Button
                variant="outlined"
                href="/auth/search"
                sx={{
                  "&:focus": {
                    outline: "none", // Removes the focus outline
                  },
                }}
              >
                Sign In
              </Button>
              <Button
                variant="outlined"
                href="/auth/sign-up"
                sx={{
                  "&:focus": {
                    outline: "none", // Removes the focus outline
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          paddingTop: "64px", // Prevents content from being hidden under fixed AppBar
          height: "100vh", // Ensures the content area is tall enough to scroll
          overflowY: "auto", // Enables scrolling
          scrollbarWidth: "none", // Firefox: hides scrollbar
          "&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari: hides scrollbar
          "-ms-overflow-style": "none", // Edge: hides scrollbar
        }}
      >
        <HeroSection />
        <FeaturesSection />
        <Comments />
        <CallToAction />
        <CopyRight />
      </Box>
    </Box>
  );
};

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          height: "75vh",
          width: "100%",
          bgcolor: "#FFF",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Box
          sx={{
            flex: 0.5,
            display: "flex",
            justifyContent: "flex-start", // Align content to the left
            alignItems: "flex-start", // Align items to the top-left
            flexDirection: "column",
            p: 10,
          }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: "left", color: "primary.black" }}
          >
            Manage Your Cooperative
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%", // Ensure the inner Box takes full width for consistent alignment
              mb: 1.5,
            }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: "left", color: "primary.black" }}
            >
              with
            </Typography>
            <Typography
              variant="h3"
              sx={{ mx: 1, color: "primary.main", textAlign: "left" }}
            >
              CoopSaas
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ textAlign: "left", color: "primary.black" }}
          >
            Designed for cooperatives to enhance member engagement, optimize
            resource sharing, and delivers data-driven insights to strengthen
            your collective success.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button variant="outlined" sx={{ mr: 2 }}>
              Start Free Trial
            </Button>
            <Button variant="outlined" sx={{ ml: 2 }}>
              Watch Demo
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            bgColor: "primary.main",
            flex: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 10,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              height: "50vh",
              width: "35vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden", // Ensures the image fits within the Paper boundaries
            }}
          >
            <img
              src={chartImage} // Replace with your image URL
              alt="Cooperative Management"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image fills the Paper while maintaining aspect ratio
              }}
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
};
const FeaturesSection = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          // bgcolor: "pink",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 1.5,
          }}
        >
          <Typography variant="h3" color="primary.black" sx={{ mb: 2 }}>
            CoopSaas Features
          </Typography>
          <Typography variant="h5" color="primary.black">
            Revolutionize your cooperative with cutting-edge technology,
            enhancing collaboration,
          </Typography>
          <Typography variant="h5" color="primary.black">
            {" "}
            and driving shared success.
          </Typography>
        </Box>
        <Box sx={{ p: 4, width: "100%" }}>
          <Grid container spacing={3}>
            {featureData.map((feature, index) => (
              <Grid item size={4} xs={12} sm={6} md={4} key={index}>
                <Paper
                  variant="outlined"
                  sx={{
                    height: "30vh",
                    width: "100%", // Adjusted to fill Grid item
                    borderRadius: 5,
                    borderColor: "secondary.main",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    p: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: 2,
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#E6F0FA",
                      color: "primary.main",
                      width: 40,
                      height: 40,
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#1A202C" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#718096", mt: 1, lineHeight: 1.5 }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
const Comments = () => {
  return (
    <>
      <Box
        sx={{
          height: "75vh",
          width: "100%",
          bgcolor: "#FFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 1.5,
          }}
        >
          <Typography variant="h3" color="primary.black" sx={{ mb: 2 }}>
            What Our Customers Say
          </Typography>
          <Typography variant="h5" color="primary.black">
            Join thousands of satisfied customers who trust our platform.
          </Typography>
        </Box>
        <Box
          sx={{ p: 4, width: "100%", display: "flex", flexDirection: "row" }}
        >
          <Grid container spacing={3} size={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid item size={4} xs={12} sm={6} md={4} key={index}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3,
                    borderRadius: 5,
                    borderColor: "#CBD5E0",
                    textAlign: "left",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "scale(1.05)",
                    },
                    height: "30vh",
                  }}
                >
                  <Typography variant="body2" color="#FFC107" gutterBottom>
                    {testimonial.rating}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: "#1A202C" }}>
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      sx={{ width: 40, height: 40, mr: 2, bgcolor: "#E6F0FA" }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {testimonial.author}
                      </Typography>
                      <Typography variant="caption" color="#718096">
                        {testimonial.title}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
const CallToAction = () => {
  return (
    <>
      <Box
        sx={{
          height: "50vh",
          width: "100%",
          bgcolor: "primary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 1.5,
          }}
        >
          <Typography variant="h3" color="secondary.main" sx={{ mb: 2 }}>
            Ready to Collaborate with Speed
          </Typography>
          <Typography variant="h5" color="secondary.main">
            Join thousands of cooperatives already using CoopSaaS to
            collaborate, gain insights and drive growth.
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              color: "primary.main",
              borderColor: "secondary.main",
              boxShadow: "none",
              bgcolor: "secondary.main",
              "&:focus": {
                outline: "none", // Removes the focus outline
              },
              ":hover": {
                bgcolor: "secondary.main",
                boxShadow: "none",
              },
              width: "12vw",
              height: 50,
              mx: 3,
              my: 3,
            }}
          >
            Start Free Trial
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "secondary.main",
              borderColor: "secondary.main",
              "&:focus": {
                outline: "none", // Removes the focus outline
              },
              width: "12vw",
              height: 50,
              mx: 3,
              my: 3,
            }}
          >
            Schedule Demo
          </Button>
        </Box>
      </Box>
    </>
  );
};
const CopyRight = () => {
  return (
    <>
      <Box
        sx={{
          height: "10vh",
          width: "100%",
          bgcolor: "secondary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 10,
        }}
      >
        <Typography variant="h6" color="primary">
          © 2025 CoopSaaS. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default LandingPage;
