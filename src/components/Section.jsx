import { Box, Typography } from "@mui/material";

export function Section({ id, children, sx = {} }) {
  return (
    <Box id={id} component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }}>
      {children}
    </Box>
  );
}

export function Label({ children }) {
  return (
    <Typography
      sx={{
        fontFamily: '"DM Mono",monospace',
        fontSize: 13,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: "primary.main",
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
}
