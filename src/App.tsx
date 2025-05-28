import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Button variant="contained" color="primary">
        Натисни мене
      </Button>
    </ThemeProvider>
  );
}

export default App;
