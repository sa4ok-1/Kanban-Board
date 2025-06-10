import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Stack, Paper, Typography } from '@mui/material';
import { registrationStepTwoSchema } from './schema';
import type { StepTwoData, StepTwoProps } from './type';

export function StepTwoForm({ onSubmit, onBack }: StepTwoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StepTwoData>({
    resolver: zodResolver(registrationStepTwoSchema),
  });

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, margin: 'auto', mt: 4 }}>
      <Typography variant='h5' align='center' gutterBottom>
        Personal Info
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label='First Name'
            {...register('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField
            label='Last Name'
            {...register('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
          <Button variant='contained' component='label'>
            Upload Avatar
            <input type='file' hidden {...register('avatar')} />
          </Button>
          <Button variant='outlined' onClick={onBack}>
            Back
          </Button>
          <Button variant='contained' type='submit' fullWidth>
            Register
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
