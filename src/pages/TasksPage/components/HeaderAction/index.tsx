import { Stack, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import type { HeaderActionsProps } from './type';
import {
  headerActionsStyles,
  titleStyles,
  buttonStackStyles,
  exportButtonStyles,
  addButtonStyles,
} from './style';

export default function HeaderActions({ onAddTask }: HeaderActionsProps) {
  const { t } = useTranslation('task_board_page');

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent='space-between'
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      flexWrap='wrap'
      sx={headerActionsStyles}
    >
      <Typography variant='h4' fontWeight='bold' sx={titleStyles}>
        {t('Tasks Board')}
      </Typography>
      <Stack direction='row' spacing={{ xs: 1, sm: 2 }} sx={buttonStackStyles}>
        <Button
          variant='outlined'
          startIcon={<DownloadIcon />}
          sx={exportButtonStyles}
        >
          {t('export')}
        </Button>
        <Button
          variant='contained'
          color='primary'
          startIcon={<AddIcon />}
          onClick={onAddTask}
          sx={addButtonStyles}
        >
          {t('add_task')}
        </Button>
      </Stack>
    </Stack>
  );
}
