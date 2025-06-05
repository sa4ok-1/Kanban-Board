import { useState } from 'react';
import { StepOneForm } from './components/StepOneForm';
import { StepTwoForm } from './components/StepTwoForm';
import type { StepOneData } from './schemas/registrationStepOneSchema';
import type { StepTwoData } from './schemas/registrationStepTwoSchema';
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Paper,
  Box,
} from '@mui/material';
import { darkTheme } from './config/LoginTheme';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<StepOneData & StepTwoData>>(
    {},
  );

  const handleStepOneSubmit = (data: StepOneData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleStepTwoSubmit = (data: StepTwoData) => {
    const fullData = { ...formData, ...data };
    console.log('Final Registration Data:', fullData);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          background: 'linear-gradient(to right, #141e30, #243b55)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth='sm'>
          <Paper elevation={6} sx={{ p: 4 }}>
            {step === 1 && <StepOneForm onSubmit={handleStepOneSubmit} />}
            {step === 2 && (
              <StepTwoForm
                onSubmit={handleStepTwoSubmit}
                onBack={() => setStep(1)}
              />
            )}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
