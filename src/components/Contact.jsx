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
import { Label, Section } from "./Section";

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
  );
}
