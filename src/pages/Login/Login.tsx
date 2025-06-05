import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './config/LoginTheme';
import { AppRoutes } from '../../routes/config';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type LoginFormData } from './types/type';
import { loginSchema } from './schema/LoginSchemas';
import { LoginForm } from '../Login/components';
import { Container, CssBaseline, Box } from '@mui/material';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const isAuthenticated = false;

  if (isAuthenticated) {
    const from = location.state?.from?.pathname || AppRoutes.DASHBOARD;
    return <Navigate to={from} replace />;
  }

  const onSubmit = async () => {
    try {
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleNavigateToRegister = () => {
    navigate(AppRoutes.REGISTER, {
      state: { from: location.state?.from },
    });
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
          <LoginForm
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit(onSubmit)}
            onNavigateToRegister={handleNavigateToRegister}
            errors={errors}
            register={register}
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
