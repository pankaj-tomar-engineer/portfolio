import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#FFFFFF",
        pt: { xs: 7, md: 9 },
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        {/* ================= TOP SECTION ================= */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.8fr 1fr 1fr",
            },
            gap: { xs: 5, md: 8 },
          }}
        >
          {/* ================= BRAND ================= */}
          <Box>
            {/* Logo */}
            <Stack direction="row" alignItems="center" spacing={1.5}>
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
                sx={{
                  fontSize: { xs: 24, md: 27 },
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  color: "#172626",
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

            {/* Description */}
            <Typography
              sx={{
                mt: 2.5,
                textAlign: "left",
                maxWidth: 560,
                fontSize: 17,
                lineHeight: 1.75,
                color: "#607070",
              }}
            >
              Passionate Web & App Developer crafting scalable, secure, and
              responsive digital solutions. Let's build something amazing
              together.
            </Typography>

            {/* Social Icons */}
            <Stack direction="row" spacing={1.5} sx={{ mt: 3.5 }}>
              {/* GitHub */}
              <IconButton
                component="a"
                href="https://github.com/pankaj-tomar-engineer/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: "#F0FAFA",
                  color: "#172626",

                  "&:hover": {
                    bgcolor: "#40E0D0",
                    color: "#172626",
                    transform: "translateY(-3px)",
                  },

                  transition: "all .25s ease",
                }}
              >
                <GitHubIcon />
              </IconButton>

              {/* LinkedIn */}
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/pankaj-tomar-engineer/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: "#F0FAFA",
                  color: "#172626",

                  "&:hover": {
                    bgcolor: "#40E0D0",
                    color: "#172626",
                    transform: "translateY(-3px)",
                  },

                  transition: "all .25s ease",
                }}
              >
                <LinkedInIcon />
              </IconButton>

              {/* Email */}
              <IconButton
                component="a"
                href="mailto:pankaj.tomar.engineer@gmail.com"
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: "#F0FAFA",
                  color: "#172626",

                  "&:hover": {
                    bgcolor: "#40E0D0",
                    color: "#172626",
                    transform: "translateY(-3px)",
                  },

                  transition: "all .25s ease",
                }}
              >
                <EmailOutlinedIcon />
              </IconButton>

              {/* Phone */}
              <IconButton
                component="a"
                href="tel:+917217476782"
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: "#F0FAFA",
                  color: "#172626",

                  "&:hover": {
                    bgcolor: "#40E0D0",
                    color: "#172626",
                    transform: "translateY(-3px)",
                  },

                  transition: "all .25s ease",
                }}
              >
                <PhoneOutlinedIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* ================= QUICK LINKS ================= */}
          <Box>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: "#172626",
                textAlign: "left",
                mb: 2.5,
              }}
            >
              Quick Links
            </Typography>

            <Stack spacing={1.7}>
              {[
                ["About", "/about"],
                ["Skills", "/skills"],
                ["Experience", "/experience"],
                ["Projects", "/projects"],
              ].map(([label, path]) => (
                <Typography
                  key={label}
                  component={Link}
                  to={path}
                  sx={{
                    width: "fit-content",
                    color: "#607070",
                    fontSize: 17,
                    textDecoration: "none",
                    transition: "all .2s ease",

                    "&:hover": {
                      color: "#3BD6C6",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  {label}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* ================= CONTACT ================= */}
          <Box>
            <Typography
              sx={{
                mb: 2.5,
                fontSize: 24,
                fontWeight: 700,
                color: "#172626",
                textAlign: "left",
              }}
            >
              Contact
            </Typography>

            <Stack spacing={1.7}>
              {/* Email */}
              <Typography
                component="a"
                href="mailto:pankaj.tomar.engineer@gmail.com"
                sx={{
                  textAlign: "left",
                  color: "#607070",
                  fontSize: 17,
                  textDecoration: "none",

                  "&:hover": {
                    color: "#3BD6C6",
                  },
                }}
              >
                pankaj.tomar.engineer@gmail.com
              </Typography>

              {/* Phone */}
              <Typography
                component="a"
                href="tel:+917217476782"
                sx={{
                  textAlign: "left",
                  color: "#607070",
                  fontSize: 17,
                  textDecoration: "none",

                  "&:hover": {
                    color: "#3BD6C6",
                  },
                }}
              >
                +91 72174 76782
              </Typography>

              {/* Location */}
              <Typography
                sx={{
                  textAlign: "left",
                  color: "#607070",
                  fontSize: 17,
                }}
              >
                Ghaziabad, Uttar Pradesh
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/* ================= DIVIDER ================= */}
        <Divider
          sx={{
            mt: { xs: 6, md: 8 },
            borderColor: "#DCEEEE",
          }}
        />

        {/* ================= BOTTOM ================= */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            pt: 3,
          }}
        >
          {/* Copyright */}
          <Typography
            sx={{
              color: "#607070",
              fontSize: 16,
            }}
          >
            © {new Date().getFullYear()} Pankaj Tomar. All rights reserved.
          </Typography>

          {/* Back To Top */}
          <IconButton
            onClick={scrollToTop}
            aria-label="Back to top"
            sx={{
              width: 56,
              height: 56,
              bgcolor: "#B3ECEC",
              color: "#172626",

              "&:hover": {
                bgcolor: "#40E0D0",
                color: "#172626",
                transform: "translateY(-3px)",
              },

              transition: "all .25s ease",
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
