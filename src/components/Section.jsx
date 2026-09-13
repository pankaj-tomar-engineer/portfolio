import { Box } from "@mui/material";

export default function Section({ id, children, sx = {} }) {
  return (
    <Box id={id} component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }}>
      {children}
    </Box>
  );
}
