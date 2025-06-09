import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Stack, Paper, Typography } from '@mui/material';
import { registrationStepOneSchema } from '../schemas/registrationStepOneSchema';
import type { StepOneData } from '../types/registrationStepOne';
import type { StepOneProps } from './types/type';

export function StepOneForm({ onSubmit }: StepOneProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StepOneData>({
    resolver: zodResolver(registrationStepOneSchema),
  });

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, margin: 'auto', mt: 4 }}>
      <Typography variant='h5' align='center' gutterBottom>
        Registration
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label='Email'
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label='Password'
            type='password'
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            label='Confirm Password'
            type='password'
            {...register('confirmPassword')}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <Button variant='contained' type='submit' fullWidth>
            Next
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
