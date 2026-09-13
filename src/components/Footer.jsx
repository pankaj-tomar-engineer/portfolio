import { Box, Container, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 3, bgcolor: "#111827", color: "rgba(255,255,255,.65)" }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Pankaj Tomar Built with React + Vite +
            Material UI
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
