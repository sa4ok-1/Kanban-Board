import {
  TextField,
  Button,
  Stack,
  Typography,
  Container,
  Paper,
  CssBaseline,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "../layout/LoginRegister/LoginTheme";
import { AppRoutes } from "../config/routes";
import {
  loginSchema,
  type LoginFormData,
} from "../layout/LoginRegister/schema/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {
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
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          background: "linear-gradient(to right, #141e30, #243b55)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <Paper elevation={6} sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Login to Your Account
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <TextField
                  label="Email"
                  fullWidth
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  disabled={isSubmitting}
                />
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ py: 1.5 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </Button>
                <Typography
                  align="center"
                  variant="body2"
                  color="text.secondary"
                >
                  Don't have an account?
                </Typography>
                <Button
                  type="button"
                  variant="outlined"
                  fullWidth
                  onClick={() =>
                    navigate(AppRoutes.REGISTER, {
                      state: { from: location.state?.from },
                    })
                  }
                  disabled={isSubmitting}
                >
                  Create Account
                </Button>
              </Stack>
            </form>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
