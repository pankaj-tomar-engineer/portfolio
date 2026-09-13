import { projects } from "../data/rest";

import { Box, Chip, Container, Paper, Stack, Typography } from "@mui/material";

import { motion } from "framer-motion";
import { Section } from "./Section";

export default function Projects() {
  return (
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
                  <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
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
  );
}
