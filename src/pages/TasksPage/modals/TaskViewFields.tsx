import { Typography, Box } from '@mui/material';
import type { CreateTask } from '../../../types/type';
import { useTranslation } from 'react-i18next';

interface Props {
  task: CreateTask;
}

export default function TaskViewFields({ task }: Props) {
  const { t } = useTranslation('task_info_dialog');

  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <Typography>
        <strong>{t('task_dialog.fields.title')}:</strong> {task.title}
      </Typography>
      <Typography>
        <strong>{t('task_dialog.fields.description')}:</strong>{' '}
        {task.description}
      </Typography>
      <Typography>
        <strong>{t('task_dialog.fields.status')}:</strong> {task.status}
      </Typography>
      <Typography>
        <strong>{t('task_dialog.fields.priority')}:</strong> {task.priority}
      </Typography>
      <Typography>
        <strong>{t('task_dialog.fields.author')}:</strong>{' '}
        {task.author || t('task_dialog.unknown')}
      </Typography>
      <Typography>
        <strong>{t('task_dialog.fields.executor')}:</strong>{' '}
        {task.executor || t('task_dialog.unassigned')}
      </Typography>
      <Typography>
        <strong>{t('task_dialog.fields.privacy')}:</strong> {task.privacy}
      </Typography>
    </Box>
  );
}
