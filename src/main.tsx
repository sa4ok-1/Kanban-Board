import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './index.css';
import './config/i18n.ts';
import { AppRouter } from './routes';
import theme from './infrastructure/MainTheme/theme.ts';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster position='top-center' richColors />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
