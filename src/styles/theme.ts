import { extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  cssVarPrefix: "mui",
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#5C7CFA",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#FF6B81",
        },
        background: {
          default: "#F9FAFC",
          paper: "#ffffff",
        },
        text: {
          primary: "#2E2E3A",
          secondary: "#6C757D",
        },
        divider: "#E3E6EF",
        info: {
          main: "#339AF0",
          contrastText: "#ffffff",
        },
        success: {
          main: "#51CF66",
          contrastText: "#ffffff",
        },
        warning: {
          main: "#FAB005",
          contrastText: "#000000",
        },
        error: {
          main: "#FF6B6B",
          contrastText: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#748FFC",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#FF8787",
        },
        background: {
          default: "#1E1E2F",
          paper: "#252539",
        },
        text: {
          primary: "#F1F3F5",
          secondary: "#ADB5BD",
        },
        divider: "#373A4F",
        info: {
          main: "#22B8CF",
          contrastText: "#ffffff",
        },
        success: {
          main: "#40C057",
          contrastText: "#ffffff",
        },
        warning: {
          main: "#FFD43B",
          contrastText: "#000000",
        },
        error: {
          main: "#FF8787",
          contrastText: "#ffffff",
        },
      },
    },
  },
  colorSchemeSelector: "data-theme",
  typography: {
    fontFamily: "Roboto, sans-serif",
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
            backgroundColor: "rgba(92, 124, 250, 0.1)", // primary з прозорістю
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(92, 124, 250, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(92, 124, 250, 0.25)",
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
