import { Stack, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import type { HeaderActionsProps } from './type';
import { useTheme } from '@mui/material/styles';

export default function HeaderActions({ onAddTask }: HeaderActionsProps) {
  const { t } = useTranslation('task_board_page');
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent='space-between'
      alignItems='center'
      spacing={2}
      p={3}
      bgcolor='background.paper'
      borderRadius={2}
      boxShadow='0 4px 12px rgba(0, 0, 0, 0.1)'
    >
      <Typography
        variant='h4'
        fontWeight='bold'
        sx={{ color: theme.palette.primary.main }}
      >
        {t('Tasks Board')}
      </Typography>

      <Stack
        direction='row'
        spacing={2}
        flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
        justifyContent={{ xs: 'space-between', sm: 'flex-end' }}
        width={{ xs: '100%', sm: 'auto' }}
      >
        <Button variant='outlined' startIcon={<DownloadIcon />}>
          {t('export')}
        </Button>

        <Button variant='contained' startIcon={<AddIcon />} onClick={onAddTask}>
          {t('add_task')}
        </Button>
      </Stack>
    </Stack>
  );
}
