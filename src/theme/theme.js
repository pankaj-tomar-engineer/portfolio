import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#40E0D0",
      light: "#89ECDA",
      dark: "#3BD6C6",
      contrastText: "#172626",
    },

    secondary: {
      main: "#43E8D8",
      light: "#B3ECEC",
      dark: "#3BD6C6",
      contrastText: "#172626",
    },

    background: {
      default: "#F7FAFA",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#172626",
      secondary: "#607070",
    },

    divider: "#DCEEEE",
  },

  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',

    h1: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },

    h2: {
      fontWeight: 800,
      letterSpacing: "-0.035em",
    },

    h3: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 20px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #DCEEEE",
          boxShadow: "none",
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
});

export default theme;
