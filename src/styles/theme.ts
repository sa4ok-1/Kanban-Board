import { extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  cssVarPrefix: "mui",
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#4361ee", // Яскравий синій
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#f72585", // Яскраво-рожевий
        },
        background: {
          default: "#f8f9ff", // Дуже світлий синюватий
          paper: "#ffffff",
        },
        text: {
          primary: "#2b2d42", // Темно-синій
          secondary: "#6c757d",
        },
        divider: "#e0e0e0",
        info: { 
          main: "#4895ef", // Світло-синій
          contrastText: "#ffffff",
        },
        success: { 
          main: "#4cc9f0", // Бірюзовий
          contrastText: "#ffffff",
        },
        warning: { 
          main: "#f8961e", // Яскраво-жовтий
          contrastText: "#ffffff",
        },
        error: { 
          main: "#ef233c", // Яскраво-червоний
          contrastText: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#4895ef", // Світло-синій
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#f72585", // Яскраво-рожевий
        },
        background: {
          default: "#1a1a2e", // Глибокий темно-синій
          paper: "#16213e", // Темно-синій
        },
        text: {
          primary: "#ffffff",
          secondary: "#e2e2e2",
        },
        divider: "#4a4e69",
        info: { 
          main: "#4cc9f0", // Бірюзовий
          contrastText: "#ffffff",
        },
        success: { 
          main: "#3a86ff", // Яскраво-синій
          contrastText: "#ffffff",
        },
        warning: { 
          main: "#ffbe0b", // Яскраво-жовтий
          contrastText: "#000000",
        },
        error: { 
          main: "#ff006e", // Яскраво-рожевий
          contrastText: "#ffffff",
        },
      },
    },
  },
  colorSchemeSelector: "data-theme",

  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { 
          margin: 0,
          transition: "background-color 0.3s ease",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "12px",
          padding: "10px 20px",
          fontWeight: 600,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          },
        },
        contained: {
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          padding: "8px 16px",
          "&:hover": {
            backgroundColor: "rgba(67, 97, 238, 0.1)",
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(67, 97, 238, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(67, 97, 238, 0.25)",
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          minWidth: "36px",
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
  },
});

export default theme;