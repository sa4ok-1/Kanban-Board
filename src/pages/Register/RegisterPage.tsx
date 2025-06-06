import { useState } from 'react';
import { StepOneForm } from './components/StepOneForm';
import { StepTwoForm } from './components/StepTwoForm';
import type { StepOneData } from './types/registrationStepOne';
import type { StepTwoData } from './types/registrationStepTwo';
import { ThemeProvider, CssBaseline, Container, Paper } from '@mui/material';
import { darkTheme } from 'common/LoginRegisterTheme/LoginTheme';
import AuthLayout from 'layout/authLayout/AuthLayout';

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
      <AuthLayout>
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
      </AuthLayout>
    </ThemeProvider>
  );
}
