import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from 'common/LoginRegisterTheme';
import { AppRoutes } from 'routes/config';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { LoginFormData } from './types/type';
import { loginSchema } from './schema/LoginSchemas';
import LoginForm from '../Login/components/LoginForm';
import { Container, CssBaseline } from '@mui/material';
import { AuthLayout } from 'layout/authLayout';

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
      navigate(location.state?.from?.pathname ?? { replace: true });
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
      <AuthLayout>
        <Container maxWidth='sm'>
          <LoginForm
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit(onSubmit)}
            onNavigateToRegister={handleNavigateToRegister}
            errors={errors}
            register={register}
          />
        </Container>
      </AuthLayout>
    </ThemeProvider>
  );
}
