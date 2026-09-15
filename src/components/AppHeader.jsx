import { Link, NavLink } from "react-router-dom";
import { navItem } from "../data/rest";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

export default function AppHeader() {
  const routeMap = {
    Home: "/",
    About: "/about",
    Skills: "/skills",
    Experience: "/experience",
    Projects: "/projects",
    Education: "/education",
    Contact: "/contact",
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "rgba(247,250,250,.88)",
        color: "#172626",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid #DCEEEE",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 72,
            justifyContent: "space-between",
          }}
        >
          {/* ================= LOGO + NAME ================= */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                bgcolor: "#40E0D0",
                color: "#172626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              P
            </Box>

            <Typography
              component={Link}
              to="/"
              sx={{
                fontSize: { xs: 22, md: 27 },
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "#172626",
                textDecoration: "none",
              }}
            >
              Pankaj
              <Box
                component="span"
                sx={{
                  color: "#3BD6C6",
                }}
              >
                {" Tomar"}
              </Box>
            </Typography>
          </Stack>

          {/* ================= RIGHT SIDE ================= */}
          <Stack direction="row" alignItems="center" spacing={1}>
            {/* ================= DESKTOP NAVIGATION ================= */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              {navItem.map((item) => (
                <Button
                  key={item}
                  component={NavLink}
                  to={routeMap[item]}
                  end={item === "Home"}
                  sx={{
                    position: "relative",
                    textTransform: "none",
                    color: "#172626",
                    fontWeight: 500,
                    px: 1.5,
                    py: 1,

                    /* Remove default MUI button hover background */
                    "&:hover": {
                      color: "#3BD6C6",
                      backgroundColor: "transparent",
                    },

                    /* ================= UNDERLINE ================= */
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "50%",
                      bottom: 3,
                      width: 0,
                      height: "2px",
                      borderRadius: "10px",
                      backgroundColor: "#40E0D0",
                      transform: "translateX(-50%)",
                      transition: "width 0.3s ease",
                    },

                    /* ================= ACTIVE ITEM ================= */
                    "&.active": {
                      color: "#172626",
                      fontWeight: 600,
                    },

                    "&.active::after": {
                      width: "65%",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>

            {/* ================= LET'S TALK ================= */}
            <Button
              component={NavLink}
              to="/contact"
              variant="contained"
              sx={{
                ml: { xs: 0, md: 1 },
                display: { xs: "none", sm: "inline-flex" },

                bgcolor: "#40E0D0",
                color: "#172626",

                "&:hover": {
                  bgcolor: "#3BD6C6",
                },
              }}
            >
              Let's talk
              <ArrowOutwardIcon
                sx={{
                  fontSize: 17,
                  ml: 0.5,
                }}
              />
            </Button>

            {/* ================= MOBILE MENU ================= */}
            <IconButton
              sx={{
                display: { xs: "inline-flex", md: "none" },
                ml: 1,
                color: "#172626",

                "&:hover": {
                  bgcolor: "#B3ECEC",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
