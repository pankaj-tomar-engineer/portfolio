import React from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import { education } from "../data/rest";

export default function Education() {
  return (
    <Box
      component="section"
      id="education"
      sx={{
        py: 10,
        bgcolor: "rgba(255, 255, 255, 0.65)",
        borderTop: "1px solid #DCEEEE",
        borderBottom: "1px solid #DCEEEE",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          spacing={3}
          sx={{ mb: { xs: 6, md: 8 } }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 42, sm: 56, md: 72 },
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-.055em",
                color: "#172626",
              }}
            >
              Academic
              <br />
              <Box
                component="span"
                sx={{
                  color: "#89ECDA",
                }}
              >
                background.
              </Box>
            </Typography>
          </Box>

          <Typography
            sx={{
              maxWidth: 380,
              fontSize: 17,
              lineHeight: 1.7,
              color: "#607070",
            }}
          >
            My academic journey and educational foundation that shaped my
            technical career.
          </Typography>
        </Stack>

        {/* Education List */}
        <Stack>
          {education.map((item, index) => (
            <React.Fragment key={`${item.course}-${index}`}>
              <Box
                sx={{
                  py: { xs: 4, md: 5 },
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "180px 1fr auto",
                  },
                  gap: { xs: 3, md: 5 },
                }}
              >
                {/* Duration */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#172626",
                    }}
                  >
                    {item.startYear} — {item.endYear}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      fontSize: 13,
                      color: "#607070",
                    }}
                  >
                    {item.duration}
                  </Typography>
                </Box>

                {/* Course */}
                <Box>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 1.5 }}
                  >
                    {/* Education Icon */}
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        bgcolor: "#B3ECEC",
                        color: "#3BD6C6",

                        transition: "all 0.3s ease",

                        "&:hover": {
                          bgcolor: "#40E0D0",
                          color: "#172626",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <SchoolOutlinedIcon />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontSize: { xs: 20, md: 24 },
                          fontWeight: 750,
                          lineHeight: 1.2,
                          letterSpacing: "-.025em",
                          color: "#172626",
                        }}
                      >
                        {item.course}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.5,
                          textAlign: "left",
                          fontSize: 14,
                          color: "#607070",
                        }}
                      >
                        {item.university}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Description */}
                  <Typography
                    sx={{
                      textAlign: "left",
                      maxWidth: 650,
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "#607070",
                      ml: { xs: 0, sm: 7 },
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>

                {/* Location */}
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#607070",
                    textAlign: {
                      xs: "left",
                      md: "right",
                    },
                  }}
                >
                  {item.location}
                </Typography>
              </Box>

              {index < education.length - 1 && (
                <Divider
                  sx={{
                    borderColor: "#DCEEEE",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
