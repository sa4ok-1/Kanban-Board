import { Stack, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import type { ActionsButtonsProps } from '../types';

export default function ActionsButtons({ onAddTask }: ActionsButtonsProps) {
  const { t } = useTranslation('task_board_page');

  return (
    <Stack direction='row' spacing={2}>
      <Button variant='outlined' startIcon={<DownloadIcon />}>
        {t('export')}
      </Button>
      <Button variant='contained' startIcon={<AddIcon />} onClick={onAddTask}>
        {t('add_task')}
      </Button>
    </Stack>
  );
}
