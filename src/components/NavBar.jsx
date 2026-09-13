import { useState } from "react";
import { navItem } from "../data/rest";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function AppHeader() {
  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
            {navItem.map((x) => (
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
            sx={{ display: { xs: "inline-flex", md: "none" }, ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
