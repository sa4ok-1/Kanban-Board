import { Box, Container } from '@mui/material';
import type { AuthLayoutProps } from './type';

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
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
      <Container maxWidth='sm'>{children}</Container>
    </Box>
  );
}
