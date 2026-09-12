import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DownloadIcon from "@mui/icons-material/Download";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorageIcon from "@mui/icons-material/Storage";
import Groups2Icon from "@mui/icons-material/Groups2";
import { motion } from "framer-motion";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const nav = ["About", "Skills", "Experience", "Projects", "Contact"];
const skills = [
  "React Native",
  "React.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Java",
  "REST APIs",
  "Firebase",
  "Git",
  "Docker",
  "Redux",
  "Material UI",
];
const experience = [
  [
    "2022 — Present",
    "Technical Team Lead / Senior React Native Developer",
    "Leading mobile development, architecture and delivery for production applications across React Native, APIs, authentication, fintech integrations and scalable architecture.",
  ],
  [
    "2020 — 2022",
    "React Native Developer",
    "Built and maintained cross-platform mobile applications with reusable components, API integrations, state management and production release workflows.",
  ],
  [
    "Earlier",
    "Software Developer",
    "Worked across web and backend development while strengthening JavaScript, React, Node.js, databases and software engineering fundamentals.",
  ],
];
const projects = [
  [
    "01",
    "Fintech Mobile Platform",
    "A secure cross-platform financial application focused on authentication, API integrations, transaction flows and a polished mobile experience.",
    ["React Native", "Node.js", "REST API"],
  ],
  [
    "02",
    "Business Operations App",
    "A production mobile solution for business workflows with reusable UI, role-based experiences, notifications and backend integrations.",
    ["React Native", "TypeScript", "Firebase"],
  ],
  [
    "03",
    "Developer Portfolio",
    "A fast, responsive personal portfolio built with React, Vite and Material UI with a strong editorial visual identity.",
    ["React", "Vite", "MUI"],
  ],
];

function Label({ children }) {
  return (
    <Typography
      sx={{
        fontFamily: '"DM Mono",monospace',
        fontSize: 13,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: "primary.main",
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
}
function Section({ id, children, sx = {} }) {
  return (
    <Box id={id} component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }}>
      {children}
    </Box>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);

  const [open, setOpen] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText("pankaj.tomar.engineer@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const go = (id) => {
    setOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(247,247,245,.88)",
          color: "text.primary",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid #e7e7e3",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 72 }}>
            <Typography
              component="a"
              href="#top"
              sx={{
                fontWeight: 800,
                fontSize: 18,
                letterSpacing: "-.03em",
                mr: "auto",
              }}
            >
              PT<span style={{ color: "#5B3DF5" }}>.</span>
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {nav.map((x) => (
                <Button key={x} color="inherit" onClick={() => go(x)}>
                  {x}
                </Button>
              ))}
            </Stack>
            <Button
              variant="contained"
              onClick={() => go("Contact")}
              sx={{ ml: 2, display: { xs: "none", sm: "inline-flex" } }}
            >
              Let's talk <ArrowOutwardIcon sx={{ fontSize: 17, ml: 0.5 }} />
            </Button>
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" }, ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, pt: 8 }}>
          <List>
            {nav.map((x) => (
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
                  href="./public/Pankaj_MERN_6+yr_Lead.pdf"
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
                  src={"./public/pankajPhoto.png"}
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

      <Section id="about" sx={{ bgcolor: "#151A2D", color: "white" }}>
        <Container maxWidth="lg">
          <Label>About</Label>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1.5fr" },
              gap: 5,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 34, md: 48 },
                fontWeight: 700,
                lineHeight: 1.05,
              }}
            >
              I turn complex problems into simple digital products.
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 21 },
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,.72)",
                }}
              >
                I’m a software engineer with 5+ years of experience focused on
                React Native and modern JavaScript ecosystems. My work spans
                mobile architecture, backend API development, secure fintech
                integrations and technical leadership.
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                sx={{ mt: 4 }}
              >
                {[
                  [PhoneIphoneIcon, "Mobile"],
                  [CodeIcon, "Web"],
                  [StorageIcon, "Backend"],
                  [Groups2Icon, "Leadership"],
                ].map(([I, x]) => (
                  <Chip
                    key={x}
                    icon={<I />}
                    label={x}
                    sx={{ color: "white", borderColor: "rgba(255,255,255,.2)" }}
                    variant="outlined"
                  />
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Section>

      <Section id="skills">
        <Container maxWidth="lg">
          <Label>Skills</Label>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 42, md: 62 },
              letterSpacing: "-.05em",
              mb: 6,
            }}
          >
            Tools I work with.
          </Typography>
          <Stack direction="row" flexWrap="wrap" useFlexGap gap={1.2}>
            {skills.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.035 }}
              >
                <Chip
                  label={s}
                  variant="outlined"
                  sx={{ fontSize: 15, px: 1, py: 2.8, borderColor: "#d8d8d2" }}
                />
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Section>

      <Section id="experience" sx={{ bgcolor: "#ECECE8" }}>
        <Container maxWidth="lg">
          <Label>Experience</Label>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 42, md: 62 },
              letterSpacing: "-.05em",
              mb: 7,
            }}
          >
            Experience that ships.
          </Typography>
          <Stack divider={<Divider />}>
            {experience.map(([period, role, text]) => (
              <Box
                key={period}
                sx={{
                  py: 4,
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "180px 1fr" },
                  gap: 3,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"DM Mono",monospace',
                    color: "primary.main",
                    fontSize: 13,
                  }}
                >
                  {period}
                </Typography>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { xs: 24, md: 30 }, mb: 0.7 }}
                  >
                    {role}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.8, maxWidth: 800 }}
                  >
                    {text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Container>
      </Section>

      <Section id="projects">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 42, md: 62 },
              letterSpacing: "-.05em",
              mb: 6,
            }}
          >
            Things I’ve built.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
              gap: 2,
            }}
          >
            {projects.map(([n, title, desc, tags], i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    minHeight: 390,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    border: "1px solid #deded8",
                    borderRadius: 0,
                    transition: ".25s",
                    "&:hover": {
                      transform: "translateY(-7px)",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"DM Mono",monospace',
                        color: "primary.main",
                        mb: 8,
                      }}
                    >
                      {n}
                    </Typography>
                    <Typography variant="h4" sx={{ fontSize: 28, mb: 2 }}>
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ lineHeight: 1.75 }}
                    >
                      {desc}
                    </Typography>
                  </Box>
                  <Stack direction="row" flexWrap="wrap" useFlexGap gap={0.7}>
                    {tags.map((t) => (
                      <Chip key={t} label={t} size="small" />
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Section>

      <Section id="contact" sx={{ bgcolor: "#5B3DF5", color: "white" }}>
        <Container maxWidth="lg">
          <Label>Contact</Label>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: 48, md: 78 },
              lineHeight: 0.95,
              letterSpacing: "-.06em",
              mb: 4,
            }}
          >
            Have a project in mind?
            <br />
            Let’s build it.
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(255,255,255,.78)",
              mb: 4,
            }}
          >
            I’m open to interesting product, mobile and full-stack engineering
            opportunities.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gap: 2.5,
            }}
          >
            {/* Copy Email */}
            <Button
              component="button"
              variant="contained"
              onClick={copyEmail}
              endIcon={
                copied ? <CheckOutlinedIcon /> : <ContentCopyOutlinedIcon />
              }
              sx={{
                minHeight: 52,
                px: 3,
                borderRadius: "14px",
                bgcolor: "white",
                color: "#151A2D",
                fontSize: { xs: 14, sm: 16 },
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                transition: "all .25s ease",

                "&:hover": {
                  bgcolor: "#f5f5f5",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                },
              }}
            >
              {copied ? "Email Copied!" : "pankaj.tomar.engineer@gmail.com"}
            </Button>

            {/* OR divider */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: { xs: "80%", sm: 320 },
                gap: 2,
                color: "rgba(255,255,255,.5)",
              }}
            >
              <Divider
                sx={{
                  flex: 1,
                  borderColor: "rgba(255,255,255,.2)",
                }}
              />

              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: 1,
                }}
              >
                OR
              </Typography>

              <Divider
                sx={{
                  flex: 1,
                  borderColor: "rgba(255,255,255,.2)",
                }}
              />
            </Box>

            {/* WhatsApp */}
            <IconButton
              component="a"
              href="https://wa.me/917217476782"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with me on WhatsApp"
              sx={{
                width: 54,
                height: 54,
                color: "white",
                border: "1px solid rgba(255,255,255,.25)",
                borderRadius: "50%",
                background: "rgba(255,255,255,.08)",
                transition: "all .25s ease",

                "&:hover": {
                  background: "rgba(255,255,255,.16)",
                  transform: "translateY(-3px) scale(1.05)",
                  borderColor: "rgba(255,255,255,.5)",
                },

                "& svg": {
                  fontSize: 28,
                },
              }}
            >
              <WhatsAppIcon />
            </IconButton>

            <Typography
              sx={{
                fontSize: 13,
                color: "rgba(255,255,255,.55)",
                mt: -1,
              }}
            >
              Chat with me on WhatsApp
            </Typography>
          </Box>
        </Container>
      </Section>
      <Box
        component="footer"
        sx={{ py: 3, bgcolor: "#111827", color: "rgba(255,255,255,.65)" }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Typography variant="body2">
              © {new Date().getFullYear()} Pankaj Tomar Built with React + Vite
              + Material UI
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
