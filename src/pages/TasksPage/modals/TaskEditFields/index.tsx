import { TextField, MenuItem, Box } from '@mui/material';
import { TaskStatus, TaskPriority, TaskPrivacy } from 'types/task';
import { useTranslation } from 'react-i18next';
import type { TaskEditFieldsProps } from './type';

export default function TaskEditFields({
  task,
  onChange,
}: TaskEditFieldsProps) {
  const { t } = useTranslation('task_dialog');

  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <TextField
        label={t('fields.title')}
        name='title'
        value={task.title}
        onChange={onChange}
        fullWidth
      />
      <TextField
        label={t('fields.description')}
        name='description'
        value={task.description}
        onChange={onChange}
        fullWidth
        multiline
        rows={3}
      />
      <TextField
        select
        label={t('fields.status')}
        name='status'
        value={task.status}
        onChange={onChange}
        fullWidth
      >
        {Object.entries(TaskStatus).map(([key, value]) => (
          <MenuItem key={key} value={value}>
            {t(`status_options.${value.toLowerCase().replace(' ', '_')}`)}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label={t('fields.priority')}
        name='priority'
        value={task.priority}
        onChange={onChange}
        fullWidth
      >
        {Object.entries(TaskPriority).map(([key, value]) => (
          <MenuItem key={key} value={value}>
            {t(`priority_options.${value.toLowerCase()}`)}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label={t('fields.author')}
        name='author'
        value={task.author || ''}
        onChange={onChange}
        fullWidth
      />
      <TextField
        label={t('fields.executor')}
        name='executor'
        value={task.executor || ''}
        onChange={onChange}
        fullWidth
      />
      <TextField
        select
        label={t('fields.privacy')}
        name='privacy'
        value={task.privacy}
        onChange={onChange}
        fullWidth
      >
        {Object.entries(TaskPrivacy).map(([key, value]) => (
          <MenuItem key={key} value={value}>
            {t(`privacy_options.${value.toLowerCase()}`)}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
