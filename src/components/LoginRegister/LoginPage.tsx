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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./LoginTheme";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
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
                />
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  Sign In
                </Button>
                <Typography
                  align="center"
                  variant="body2"
                  color="text.secondary"
                >
                  Don’t have an account?
                </Typography>
                <Button
                  type="button"
                  variant="outlined"
                  fullWidth
                  onClick={() => navigate("/register")}
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
