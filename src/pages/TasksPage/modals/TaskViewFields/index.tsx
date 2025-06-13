import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { TaskViewFieldsProps } from './type';

export default function TaskViewFields({ task }: TaskViewFieldsProps) {
  const { t } = useTranslation('task_dialog');

  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <Typography variant='body1'>
        <strong>{t('fields.title')}:</strong> {task.title}
      </Typography>

      <Typography variant='body1'>
        <strong>{t('fields.description')}:</strong> {task.description}
      </Typography>

      <Typography variant='body1'>
        <strong>{t('fields.completed')}:</strong>{' '}
        {task.completed
          ? t('fields.completed_true')
          : t('fields.completed_false')}
      </Typography>

      <Typography variant='body2' color='text.secondary'>
        <strong>{t('fields.createdAt')}:</strong>{' '}
        {new Date(task.createdAt).toLocaleString()}
      </Typography>

      <Typography variant='body2' color='text.secondary'>
        <strong>{t('fields.updatedAt')}:</strong>{' '}
        {new Date(task.updatedAt).toLocaleString()}
      </Typography>
    </Box>
  );
}
