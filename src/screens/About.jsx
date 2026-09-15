import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorageIcon from "@mui/icons-material/Storage";
import Groups2Icon from "@mui/icons-material/Groups2";
import { Section } from "../components/Section";

export default function About() {
  return (
    <Section
      id="about"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.65)",
        color: "#172626",
        borderTop: "1px solid #DCEEEE",
        borderBottom: "1px solid #DCEEEE",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1.5fr",
            },
            gap: 5,
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: 34, md: 48 },
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#172626",
            }}
          >
            I turn complex problems into simple digital products.
          </Typography>

          {/* Content */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 21 },
                lineHeight: 1.8,
                color: "#607070",
              }}
            >
              I’m a software engineer with 5+ years of experience focused on
              React Native and modern JavaScript ecosystems. My work spans
              mobile architecture, backend API development, secure fintech
              integrations and technical leadership.
            </Typography>

            {/* Skills */}
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{
                mt: 4,
              }}
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
                  variant="outlined"
                  sx={{
                    color: "#172626",
                    borderColor: "#B3ECEC",
                    backgroundColor: "rgba(240, 250, 250, 0.7)",

                    "& .MuiChip-icon": {
                      color: "#3BD6C6",
                    },

                    "&:hover": {
                      borderColor: "#40E0D0",
                      backgroundColor: "#F0FAFA",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Section>
  );
}
