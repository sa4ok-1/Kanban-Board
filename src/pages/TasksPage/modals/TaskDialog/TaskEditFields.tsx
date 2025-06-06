import { TextField, MenuItem, Box } from '@mui/material';
import { type ChangeEvent } from 'react';
import { TaskStatus, TaskPriority, type CreateTask } from '../../../../types/task';
import { useTranslation } from 'react-i18next';

interface Props {
  task: CreateTask;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function TaskEditFields({ task, onChange }: Props) {
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
        <MenuItem value={TaskStatus.TODO}>
          {t('task_dialog.status_options.todo')}
        </MenuItem>
        <MenuItem value={TaskStatus.IN_PROGRESS}>
          {t('task_dialog.status_options.in_progress')}
        </MenuItem>
        <MenuItem value={TaskStatus.DONE}>
          {t('task_dialog.status_options.done')}
        </MenuItem>
      </TextField>
      <TextField
        select
        label={t('task_dialog.fields.priority')}
        name='priority'
        value={task.priority}
        onChange={onChange}
        fullWidth
      >
        <MenuItem value={TaskPriority.LOW}>
          {t('task_dialog.priority_options.low')}
        </MenuItem>
        <MenuItem value={TaskPriority.MEDIUM}>
          {t('task_dialog.priority_options.medium')}
        </MenuItem>
        <MenuItem value={TaskPriority.HIGH}>
          {t('task_dialog.priority_options.high')}
        </MenuItem>
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
        <MenuItem value='Public'>
          {t('task_dialog.privacy_options.public')}
        </MenuItem>
        <MenuItem value='Private'>
          {t('task_dialog.privacy_options.private')}
        </MenuItem>
      </TextField>
    </Box>
  );
}
