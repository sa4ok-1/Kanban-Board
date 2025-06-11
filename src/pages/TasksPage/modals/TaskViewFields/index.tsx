import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { TaskViewFieldsProps } from './type';

export default function TaskViewFields({ task }: TaskViewFieldsProps) {
  const { t } = useTranslation('task_dialog');

  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <Typography>
        <strong>{t('fields.title')}:</strong> {task.title}
      </Typography>
      <Typography>
        <strong>{t('fields.description')}:</strong> {task.description}
      </Typography>
      <Typography>
        <strong>{t('fields.status')}:</strong> {task.status}
      </Typography>
      <Typography>
        <strong>{t('fields.priority')}:</strong> {task.priority}
      </Typography>
      <Typography>
        <strong>{t('fields.author')}:</strong> {task.author || t('unknown')}
      </Typography>
      <Typography>
        <strong>{t('fields.executor')}:</strong>{' '}
        {task.executor || t('unassigned')}
      </Typography>
      <Typography>
        <strong>{t('fields.privacy')}:</strong> {task.privacy}
      </Typography>
    </Box>
  );
}
