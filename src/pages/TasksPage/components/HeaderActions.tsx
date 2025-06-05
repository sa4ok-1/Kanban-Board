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
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      flexWrap='wrap'
    >
      <Typography variant='h4' fontWeight='bold' sx={gradientText}>
        {t('Tasks Board')}
      </Typography>
      <Stack direction='row' spacing={2}>
        <Button variant='outlined' startIcon={<DownloadIcon />}>
          {t('export')}
        </Button>
        <Button
          variant='contained'
          color='custom'
          startIcon={<AddIcon />}
          onClick={onAddTask}
        >
          {t('add_task')}
        </Button>
      </Stack>
    </Stack>
  );
}
