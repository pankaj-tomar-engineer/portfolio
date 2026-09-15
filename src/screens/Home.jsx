import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MediumIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { Label } from "../components/Section";
import { navItem } from "../data/rest";

export default function Home() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const routeMap = {
    Home: "/",
    About: "/about",
    Skills: "/skills",
    Experience: "/experience",
    Education: "/education",
    Projects: "/projects",
    Contact: "/contact",
  };

  const go = (item) => {
    setOpen(false);
    navigate(routeMap[item] || "/");
  };

  return (
    <Box>
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "#FFFFFF",
            color: "#172626",
          },
        }}
      >
        <Box sx={{ pt: 8 }}>
          <List>
            {navItem.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => go(item)}
                  sx={{
                    px: 3,
                    py: 1.5,
                    "&:hover": {
                      bgcolor: "#F0FAFA",
                      color: "#3BD6C6",
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box id="top" />

      {/* Hero */}
      <Box
        sx={{
          minHeight: { xs: "auto", md: "100vh" },
          display: "flex",
          alignItems: "center",
          pt: { xs: 12, md: 10 },
          pb: { xs: 7, md: 5 },
          background:
            "radial-gradient(circle at 15% 20%, rgba(179,236,236,.65), transparent 32%), radial-gradient(circle at 85% 35%, rgba(137,236,218,.4), transparent 30%), #F7FAFA",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1.08fr .92fr",
              },
              minHeight: { md: "78vh" },
              alignItems: "center",
              gap: { xs: 6, md: 3 },
            }}
          >
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Label>Full Stack Developer · Team Lead</Label>

              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: "4rem",
                    sm: "5.5rem",
                    md: "7.3rem",
                  },
                  lineHeight: 0.86,
                  letterSpacing: "-.065em",
                  maxWidth: 760,
                  mb: 4,
                  color: "#172626",
                  fontWeight: 700,
                }}
              >
                Pankaj
                <br />
                <Box component="span" sx={{ color: "#3BD6C6" }}>
                  Tomar
                </Box>
              </Typography>

              <Typography
                sx={{
                  maxWidth: 600,
                  fontSize: { xs: 18, md: 22 },
                  lineHeight: 1.65,
                  color: "#607070",
                  mb: 4,
                }}
              >
                Technical Team Lead and Senior React Native Developer building
                scalable mobile and web products with React, Node.js and Java.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                {/* FIXED PROJECT ROUTING */}
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowOutwardIcon />}
                  sx={{
                    bgcolor: "#40E0D0",
                    color: "#172626",
                    fontWeight: 600,
                    px: 3,
                    "&:hover": {
                      bgcolor: "#3BD6C6",
                    },
                  }}
                >
                  View my work
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="/Pankaj_MERN_6+yr_Lead.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<DownloadIcon />}
                  sx={{
                    color: "#172626",
                    borderColor: "#B3ECEC",
                    px: 3,
                    "&:hover": {
                      borderColor: "#40E0D0",
                      bgcolor: "#F0FAFA",
                    },
                  }}
                >
                  Download CV
                </Button>
              </Stack>

              {/* Social Links */}
              <Stack direction="row" spacing={1} sx={{ mt: 5 }}>
                <IconButton
                  component="a"
                  href="https://github.com/pankaj-tomar-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#172626",
                    bgcolor: "#F0FAFA",
                    "&:hover": {
                      bgcolor: "#40E0D0",
                      color: "#172626",
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/pankaj-tomar-engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#172626",
                    bgcolor: "#F0FAFA",
                    "&:hover": {
                      bgcolor: "#40E0D0",
                      color: "#172626",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://pankaj-tomar-engineer.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#172626",
                    bgcolor: "#F0FAFA",
                    "&:hover": {
                      bgcolor: "#40E0D0",
                      color: "#172626",
                    },
                  }}
                >
                  <MediumIcon />
                </IconButton>
              </Stack>
            </motion.div>

            {/* Right - Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  maxWidth: 510,
                  mx: "auto",
                  ml: { md: "auto" },
                  aspectRatio: "4/5",
                  overflow: "hidden",
                  bgcolor: "#B3ECEC",
                  borderRadius: { xs: 2, md: 3 },
                  border: "1px solid #DCEEEE",
                  boxShadow: "0 20px 50px rgba(23,38,38,.08)",
                }}
              >
                <Box
                  component="img"
                  src="/pankajPhoto.png"
                  alt="Pankaj Tomar"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                {/* Available for work */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                    px: 1.5,
                    py: 0.8,
                    bgcolor: "rgba(255,255,255,.92)",
                    color: "#172626",
                    border: "1px solid #B3ECEC",
                    borderRadius: 1,
                    fontFamily: '"DM Mono", monospace',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: ".04em",
                  }}
                >
                  AVAILABLE FOR WORK
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
