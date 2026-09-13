import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorageIcon from "@mui/icons-material/Storage";
import Groups2Icon from "@mui/icons-material/Groups2";
import { Section } from "./Section";

export default function About() {
  return (
    <Section id="about" sx={{ bgcolor: "#151A2D", color: "white" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.5fr" },
            gap: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 34, md: 48 },
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            I turn complex problems into simple digital products.
          </Typography>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 21 },
                lineHeight: 1.8,
                color: "rgba(255,255,255,.72)",
              }}
            >
              I’m a software engineer with 5+ years of experience focused on
              React Native and modern JavaScript ecosystems. My work spans
              mobile architecture, backend API development, secure fintech
              integrations and technical leadership.
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{ mt: 4 }}
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
                  sx={{ color: "white", borderColor: "rgba(255,255,255,.2)" }}
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Section>
  );
}
