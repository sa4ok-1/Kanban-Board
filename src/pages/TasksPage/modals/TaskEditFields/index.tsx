import { TextField, MenuItem, Box } from '@mui/material';
import { TaskStatus, TaskPriority, TaskPrivacy } from 'types/task';
import { useTranslation } from 'react-i18next';
import type { TaskEditFieldsProps } from './type';

export default function TaskEditFields({
  task,
  onChange,
}: TaskEditFieldsProps) {
  const { t } = useTranslation('task_info_dialog');

  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <TextField
        label={t('task_dialog.fields.title')}
        name='title'
        value={task.title}
        onChange={onChange}
        fullWidth
      />
      <TextField
        label={t('task_dialog.fields.description')}
        name='description'
        value={task.description}
        onChange={onChange}
        fullWidth
        multiline
        rows={3}
      />
      <TextField
        select
        label={t('task_dialog.fields.status')}
        name='status'
        value={task.status}
        onChange={onChange}
        fullWidth
      >
        {Object.entries(TaskStatus).map(([key, value]) => (
          <MenuItem key={key} value={value}>
            {t(`task_dialog.status_options.${value.toLowerCase().replace(' ', '_')}`)}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label={t('task_dialog.fields.priority')}
        name='priority'
        value={task.priority}
        onChange={onChange}
        fullWidth
      >
        {Object.entries(TaskPriority).map(([key, value]) => (
          <MenuItem key={key} value={value}>
            {t(`task_dialog.priority_options.${value.toLowerCase()}`)}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label={t('task_dialog.fields.author')}
        name='author'
        value={task.author || ''}
        onChange={onChange}
        fullWidth
      />
      <TextField
        label={t('task_dialog.fields.executor')}
        name='executor'
        value={task.executor || ''}
        onChange={onChange}
        fullWidth
      />
      <TextField
        select
        label={t('task_dialog.fields.privacy')}
        name='privacy'
        value={task.privacy}
        onChange={onChange}
        fullWidth
      >
        {Object.entries(TaskPrivacy).map(([key, value]) => (
          <MenuItem key={key} value={value}>
            {t(`task_dialog.privacy_options.${value.toLowerCase()}`)}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}