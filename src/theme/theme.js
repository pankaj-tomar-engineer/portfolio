import { createTheme } from "@mui/material/styles";
export default createTheme({
  palette: {
    mode: "light",
    primary: { main: "#5B3DF5" },
    secondary: { main: "#111827" },
    background: { default: "#F7F7F5", paper: "#fff" },
    text: { primary: "#151A2D", secondary: "#626779" },
  },
  typography: {
    fontFamily: '"Inter","Helvetica Neue",Arial,sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 750 },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 2,
          fontWeight: 700,
          padding: "12px 22px",
        },
      },
    },
    MuiChip: { styleOverrides: { root: { borderRadius: 4, fontWeight: 600 } } },
  },
});
