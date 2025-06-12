import { TextField, Box } from '@mui/material';
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
    </Box>
  );
}
