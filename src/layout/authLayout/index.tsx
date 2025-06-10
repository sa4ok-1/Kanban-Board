import { Box, Container } from '@mui/material';
import type { AuthLayoutProps } from './type';
import { authLayoutStyles, containerStyles } from './authLayoutStyles';

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Box sx={authLayoutStyles}>
      <Container sx={containerStyles}>{children}</Container>
    </Box>
  );
}
