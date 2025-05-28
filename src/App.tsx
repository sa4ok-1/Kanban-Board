import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardLayoutPage from "./pages/DashboardLayoutPage"
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <DashboardLayoutPage/>
    </ThemeProvider>
  );
}

export default App;
