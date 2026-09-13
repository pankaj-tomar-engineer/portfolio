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
import AppHeader from "./components/NavBar";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DownloadIcon from "@mui/icons-material/Download";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { navItem } from "./data/rest";
import Experience from "./components/Experience";
import { Label } from "./components/Section";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box>
      <AppHeader />

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, pt: 8 }}>
          <List>
            {navItem.map((x) => (
              <ListItem key={x} disablePadding>
                <ListItemButton onClick={() => go(x)}>
                  <ListItemText primary={x} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box id="top" />
      <Box
        sx={{
          minHeight: { xs: "auto", md: "100vh" },
          display: "flex",
          alignItems: "center",
          pt: { xs: 12, md: 10 },
          pb: { xs: 7, md: 5 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.08fr .92fr" },
              minHeight: { md: "78vh" },
              alignItems: "center",
              gap: { xs: 6, md: 3 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Label>Full Stack Developer · Team Lead</Label>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "4rem", sm: "5.5rem", md: "7.3rem" },
                  lineHeight: 0.86,
                  letterSpacing: "-.065em",
                  maxWidth: 760,
                  mb: 4,
                }}
              >
                Pankaj
                <br />
                Tomar<span style={{ color: "#5B3DF5" }}></span>
              </Typography>
              <Typography
                sx={{
                  maxWidth: 600,
                  fontSize: { xs: 18, md: 22 },
                  lineHeight: 1.65,
                  color: "text.secondary",
                  mb: 4,
                }}
              >
                Technical Team Lead and Senior React Native Developer building
                scalable mobile and web products with React, Node.js and Java.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => go("Projects")}
                  endIcon={<ArrowOutwardIcon />}
                >
                  View my work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="./Pankaj_MERN_6+yr_Lead.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<DownloadIcon />}
                >
                  Download CV
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ mt: 5 }}>
                <IconButton
                  component="a"
                  href="https://github.com/pankaj-tomar-engineer"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/pankaj-tomar-engineer/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://pankaj-tomar-engineer.medium.com/"
                  target="_blank"
                >
                  <EmailOutlinedIcon />
                </IconButton>
              </Stack>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <Box
                sx={{
                  position: "relative",
                  maxWidth: 510,
                  mx: "auto",
                  ml: { md: "auto" },
                  aspectRatio: "4/5",
                  overflow: "hidden",
                  bgcolor: "#E6E4DF",
                }}
              >
                <Box
                  component="img"
                  src={"./pankajPhoto.png"}
                  alt="Pankaj Tomar"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                {/* Available for work label */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                    px: 1.5,
                    py: 0.8,
                    bgcolor: "rgba(255,255,255,.92)",
                    fontFamily: '"DM Mono", monospace',
                    fontSize: 11,
                    fontWeight: 500,
                  }}
                >
                  {"AVAILABLE FOR WORK"}
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      <About />

      <Skills />

      <Experience />
      <Projects />

      <Contact />
      <Footer />
    </Box>
  );
}
