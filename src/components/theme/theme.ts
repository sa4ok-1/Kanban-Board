import { extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  cssVarPrefix: "mui",
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        custom: {
          main: "#00bcd4",
          light: "#5efcff",
          dark: "#02c4d0",
          contrastText: "#000000",
        },
        primary: {
          main: "#5C7CFA",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#FF6B81",
        },
        background: {
          default: "#F9FAFC",
          paper: "#F9FAFC",
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
        custom: {
          main: "#00bcd4",
          light: "#5efcff",
          dark: "#02c4d0",
          contrastText: "#000000",
        },
        primary: {
          main: "#3B82F6",
          contrastText: "#FFFFFF",
        },
        secondary: {
          main: "#7C3AED",
          contrastText: "#FFFFFF",
        },
        background: {
          default: "#0D1117",
          paper: "#01050a",
        },
        text: {
          primary: "#C9D1D9",
          secondary: "#8B949E",
        },
        divider: "#30363D",
        info: {
          main: "#0EA5E9",
          contrastText: "#000000",
        },
        success: {
          main: "#22C55E",
          contrastText: "#000000",
        },
        warning: {
          main: "#EAB308",
          contrastText: "#000000",
        },
        error: {
          main: "#EF4444",
          contrastText: "#FFFFFF",
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
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 600,
          fontSize: "18px",
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
            backgroundColor: "rgba(92, 124, 250, 0.1)",
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
        root: ({ theme }) => ({
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          border: `1px solid ${theme.palette.divider}`,
          color: theme.palette.text.secondaryChannel,

          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          },
        }),
      },
    },
  },
});

export default theme;
