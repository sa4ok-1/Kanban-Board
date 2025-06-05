import {
  TextField,
  Button,
  Stack,
  Typography,
  Paper,
  Link as MuiLink,
} from '@mui/material';
import type { LoginFormProps } from '../types/type';
import { Link } from 'react-router-dom';
export default function LoginForm({
  isSubmitting,
  onSubmit,
  errors,
  register,
}: LoginFormProps) {
  return (
    <Paper elevation={6} sx={{ p: 4 }}>
      <Typography variant='h4' align='center' gutterBottom>
        Login to Your Account
      </Typography>
      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <TextField
            label='Email'
            fullWidth
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            disabled={isSubmitting}
          />
          <TextField
            label='Password'
            type='password'
            fullWidth
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            disabled={isSubmitting}
          />
          <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{ py: 1.5 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </Button>
          <Typography align='center' variant='body2' color='text.secondary'>
            Don't have an account?
          </Typography>
          <MuiLink component={Link} to='/register' color='info'  underline='none' textAlign={'center'}>
            Create Account
          </MuiLink>
        </Stack>
      </form>
    </Paper>
  );
}
