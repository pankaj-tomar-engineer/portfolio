import { projects } from "../data/rest";
import { Box, Chip, Container, Paper, Stack, Typography } from "@mui/material";

import { motion } from "framer-motion";
import { Section } from "../components/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.45)",
        borderTop: "1px solid #DCEEEE",
        borderBottom: "1px solid #DCEEEE",
      }}
    >
      <Container maxWidth="lg">
        {/* ================= HEADER ================= */}
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: 40,
              sm: 50,
              md: 62,
            },
            lineHeight: 1,
            letterSpacing: "-.05em",
            mb: {
              xs: 4,
              md: 6,
            },
            color: "#172626",
            fontWeight: 700,
          }}
        >
          Things I’ve built.
        </Typography>

        {/* ================= PROJECT GRID ================= */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: {
              xs: 2,
              md: 2.5,
            },
          }}
        >
          {projects.map(([n, title, desc, tags], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.4,
              }}
              style={{
                height: "100%",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: {
                    xs: "auto",
                    md: 390,
                  },

                  p: {
                    xs: 2.5,
                    sm: 3,
                    md: 3,
                  },

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",

                  backgroundColor: "rgba(255, 255, 255, 0.85)",

                  border: "1px solid #DCEEEE",
                  borderRadius: {
                    xs: "14px",
                    md: "16px",
                  },

                  boxSizing: "border-box",

                  transition: "all .25s ease",

                  "&:hover": {
                    transform: "translateY(-7px)",
                    borderColor: "#40E0D0",
                    boxShadow: "0 14px 35px rgba(64, 224, 208, 0.14)",
                  },
                }}
              >
                {/* ================= PROJECT CONTENT ================= */}
                <Box>
                  {/* Project Number */}
                  <Typography
                    sx={{
                      fontFamily: '"DM Mono", monospace',
                      color: "#3BD6C6",
                      fontSize: 13,
                      fontWeight: 600,

                      mb: {
                        xs: 4,
                        sm: 5,
                        md: 8,
                      },
                    }}
                  >
                    {n}
                  </Typography>

                  {/* Project Title */}
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: {
                        xs: 23,
                        sm: 25,
                        md: 28,
                      },

                      lineHeight: 1.2,

                      mb: {
                        xs: 1.5,
                        md: 2,
                      },

                      color: "#172626",
                      fontWeight: 650,
                      letterSpacing: "-0.025em",

                      overflowWrap: "anywhere",
                      wordBreak: "break-word",
                    }}
                  >
                    {title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: "#607070",

                      fontSize: {
                        xs: 14.5,
                        md: 16,
                      },

                      lineHeight: 1.7,

                      overflowWrap: "anywhere",
                      wordBreak: "break-word",
                    }}
                  >
                    {desc}
                  </Typography>
                </Box>

                {/* ================= TAGS ================= */}
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  useFlexGap
                  gap={0.7}
                  sx={{
                    mt: {
                      xs: 4,
                      md: 3,
                    },
                  }}
                >
                  {tags.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        maxWidth: "100%",

                        color: "#172626",
                        backgroundColor: "#F0FAFA",
                        border: "1px solid #B3ECEC",

                        fontWeight: 500,

                        "& .MuiChip-label": {
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        },

                        "&:hover": {
                          backgroundColor: "#B3ECEC",
                          borderColor: "#40E0D0",
                        },
                      }}
                    />
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
