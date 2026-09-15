import { experience } from "../data/rest";

import { Box, Container, Divider, Stack, Typography } from "@mui/material";

import { Section } from "../components/Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.65)",
        borderTop: "1px solid #DCEEEE",
        borderBottom: "1px solid #DCEEEE",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 42, md: 62 },
            letterSpacing: "-.05em",
            mb: 7,
            color: "#172626",
            fontWeight: 600,
          }}
        >
          Experience that ships.
        </Typography>

        <Stack
          divider={
            <Divider
              sx={{
                borderColor: "#DCEEEE",
              }}
            />
          }
        >
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
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "180px 1fr",
                  },
                  gap: 3,
                }}
              >
                {/* Company + Date */}
                <Typography
                  sx={{
                    fontFamily: '"DM Mono", monospace',
                    color: "#3BD6C6",
                    fontSize: 13,
                    fontWeight: 600,
                    lineHeight: 1.6,
                  }}
                >
                  {companyName}, {location}
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      color: "#607070",
                      fontWeight: 400,
                      mt: 0.5,
                    }}
                  >
                    ({startDate} - {endDate})
                  </Box>
                </Typography>

                {/* Role + Responsibilities */}
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: 24, md: 30 },
                      mb: 0.7,
                      color: "#172626",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {role}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#607070",
                      lineHeight: 1.8,
                      maxWidth: 800,
                    }}
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
