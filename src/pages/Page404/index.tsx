import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container maxWidth='md'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          padding: 3,
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 2, fontWeight: 'bold' }}
        >
          404
        </Typography>
        <Typography variant='h4' component='h2' sx={{ mb: 2 }}>
          Page Not Found
        </Typography>
        <Typography variant='body1' sx={{ mb: 4 }}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Button
          variant='contained'
          color='primary'
          size='large'
          onClick={handleGoHome}
          sx={{ textTransform: 'none' }}
        >
          Go to Home Page
        </Button>
      </Box>
    </Container>
  );
}
