import { experience } from "../data/rest";
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

import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" sx={{ bgcolor: "#ECECE8" }}>
      <Container maxWidth="lg">
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
          {experience.map(
            (
              {
                companyName,
                startDate,
                endDate,
                role,
                responsibilities,
                location,
              },
              index,
            ) => (
              <Box
                key={index}
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
                  {companyName},{location}({startDate}-{endDate})
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
                    {responsibilities}
                  </Typography>
                </Box>
              </Box>
            ),
          )}
        </Stack>
      </Container>
    </Section>
  );
}
