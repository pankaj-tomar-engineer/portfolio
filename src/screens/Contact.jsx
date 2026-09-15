import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Section } from "../components/Section";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("pankaj.tomar.engineer@gmail.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Section
      id="contact"
      sx={{
        mt: 10,
        color: "#172626",

        bgcolor: "rgba(255, 255, 255, 0.65)",

        borderTop: "1px solid #DCEEEE",
        borderBottom: "1px solid #DCEEEE",

        background:
          "radial-gradient(circle at 50% 0%, rgba(179,236,236,.65), transparent 45%), rgba(255,255,255,.65)",
      }}
    >
      <Container maxWidth="lg">
        {/* ================= HEADING ================= */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: 48, md: 78 },
            lineHeight: 0.95,
            letterSpacing: "-.06em",
            mb: 4,
            color: "#172626",
            fontWeight: 700,
          }}
        >
          Have a project in mind?
          <br />
          <Box
            component="span"
            sx={{
              color: "#3BD6C6",
            }}
          >
            Let’s build it.
          </Box>
        </Typography>

        {/* ================= DESCRIPTION ================= */}
        <Typography
          sx={{
            color: "#607070",
            textAlign: "center",
            fontSize: 18,
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          I’m open to interesting product, mobile and full-stack engineering
          opportunities.
        </Typography>

        {/* ================= CONTACT ACTIONS ================= */}
        <Box
          sx={{
            color: "#172626",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: 2.5,
          }}
        >
          {/* ================= COPY EMAIL ================= */}
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

              bgcolor: "#40E0D0",
              color: "#172626",

              fontSize: { xs: 14, sm: 16 },
              fontWeight: 600,
              textTransform: "none",

              boxShadow: "0 8px 25px rgba(64, 224, 208, 0.18)",

              transition: "all .25s ease",

              "&:hover": {
                bgcolor: "#3BD6C6",
                transform: "translateY(-2px)",
                boxShadow: "0 12px 30px rgba(64, 224, 208, 0.25)",
              },
            }}
          >
            {copied ? "Email Copied!" : "pankaj.tomar.engineer@gmail.com"}
          </Button>

          {/* ================= OR DIVIDER ================= */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: { xs: "80%", sm: 320 },
              gap: 2,
            }}
          >
            <Divider
              sx={{
                flex: 1,
                borderColor: "#DCEEEE",
              }}
            />

            <Typography
              sx={{
                color: "#607070",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              OR
            </Typography>

            <Divider
              sx={{
                flex: 1,
                borderColor: "#DCEEEE",
              }}
            />
          </Box>

          {/* ================= WHATSAPP ================= */}
          <IconButton
            component="a"
            href="https://wa.me/917217476782"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with me on WhatsApp"
            sx={{
              width: 54,
              height: 54,

              color: "#172626",

              border: "1px solid #B3ECEC",
              borderRadius: "50%",

              background: "#F0FAFA",

              transition: "all .25s ease",

              "&:hover": {
                background: "#40E0D0",
                transform: "translateY(-3px) scale(1.05)",
                borderColor: "#40E0D0",
              },

              "& svg": {
                fontSize: 28,
              },
            }}
          >
            <WhatsAppIcon />
          </IconButton>

          {/* ================= WHATSAPP LABEL ================= */}
          <Typography
            sx={{
              color: "#607070",
              fontSize: 13,
              mt: -1,
            }}
          >
            Chat with me on WhatsApp
          </Typography>
        </Box>
      </Container>
    </Section>
  );
}
