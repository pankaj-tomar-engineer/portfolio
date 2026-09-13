import { Chip, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "../data/rest";

export default function Skills() {
  return (
    <Section id="skills">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 42, md: 62 },
            letterSpacing: "-.05em",
            mb: 6,
          }}
        >
          Skills I work with.
        </Typography>
        <Stack direction="row" flexWrap="wrap" useFlexGap gap={1.2}>
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.035 }}
            >
              <Chip
                label={s}
                variant="outlined"
                sx={{ fontSize: 15, px: 1, py: 2.8, borderColor: "#d8d8d2" }}
              />
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Section>
  );
}
