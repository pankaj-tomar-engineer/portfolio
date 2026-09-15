import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box sx={{ py: 15 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { xs: 60, md: 100 },
            fontWeight: 800,
          }}
        >
          404
        </Typography>

        <Typography variant="h4" sx={{ mb: 3 }}>
          Page not found
        </Typography>

        <Button component={Link} to="/" variant="contained">
          Back to Home
        </Button>
      </Container>
    </Box>
  );
}
