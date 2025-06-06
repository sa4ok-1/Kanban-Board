import { Stack, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import { gradientText } from 'infrastructure/theme/config/typographyStyles';

interface Props {
  onAddTask: () => void;
}

export default function HeaderActions({ onAddTask }: Props) {
  const { t } = useTranslation('task_board_page');

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent='space-between'
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      flexWrap='wrap'
      sx={{
        gap: { xs: 2, sm: 0 },
        py: { xs: 2, sm: 3 },
        px: { xs: 3, sm: 4 },
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <Typography
        variant='h4'
        fontWeight='bold'
        sx={{
          ...gradientText,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
          letterSpacing: '-0.02em',
          background: 'linear-gradient(90deg, #3b82f6, #10b981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transition: 'all 0.3s ease',
        }}
      >
        {t('Tasks Board')}
      </Typography>
      <Stack
        direction='row'
        spacing={{ xs: 1, sm: 2 }}
        sx={{
          mt: { xs: 1, sm: 0 },
          width: { xs: '100%', sm: 'auto' },
          justifyContent: { xs: 'space-between', sm: 'flex-end' },
        }}
      >
        <Button
          variant='outlined'
          startIcon={<DownloadIcon />}
          sx={{
            borderColor: '#3b82f6',
            color: '#3b82f6',
            fontWeight: 500,
            textTransform: 'none',
            px: { xs: 2, sm: 3 },
            py: 1,
            borderRadius: 2,
            transition: 'all 0.2s ease',
            '&:hover': {
              borderColor: '#2563eb',
              bgcolor: 'rgba(59, 130, 246, 0.1)',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
            width: { xs: '48%', sm: 'auto' },
          }}
        >
          {t('export')}
        </Button>
        <Button
          variant='contained'
          color='primary'
          startIcon={<AddIcon />}
          onClick={onAddTask}
          sx={{
            bgcolor: '#3b82f6',
            color: 'white',
            fontWeight: 600,
            textTransform: 'none',
            px: { xs: 2, sm: 3 },
            py: 1,
            borderRadius: 2,
            transition: 'all 0.2s ease',
            '&:hover': {
              bgcolor: '#2563eb',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            },
            width: { xs: '48%', sm: 'auto' },
          }}
        >
          {t('add_task')}
        </Button>
      </Stack>
    </Stack>
  );
}
