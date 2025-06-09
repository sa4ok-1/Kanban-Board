import { useState, type ChangeEvent, type FC } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Stack,
} from '@mui/material';
import { nanoid } from 'nanoid';
import { type CreateTask, TaskStatus, TaskPriority } from 'types/task';
import { initialValues } from '../../types/initialValues';
import { useTranslation } from 'react-i18next';
import type { CreateTaskDialogProps } from './type';

const CreateTaskDialog: FC<CreateTaskDialogProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const { t } = useTranslation('task_board_page');
  const [formData, setFormData] = useState<CreateTask>(initialValues);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.title.trim() || !formData.description.trim()) return;
    const newTask = { ...formData, id: nanoid() };
    onSubmit(newTask);
    setFormData(initialValues);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogTitle>{t('AddTaskModal.title')}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            name='title'
            label={t('AddTaskModal.fields.title')}
            fullWidth
            multiline
            rows={3}
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            name='description'
            label={t('AddTaskModal.fields.description')}
            fullWidth
            multiline
            rows={3}
            value={formData.description}
            onChange={handleChange}
          />

          <TextField
            name='status'
            label={t('AddTaskModal.fields.status')}
            select
            fullWidth
            value={formData.status}
            onChange={handleChange}
          >
            {Object.values(TaskStatus).map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name='priority'
            label={t('AddTaskModal.fields.priority')}
            select
            fullWidth
            value={formData.priority}
            onChange={handleChange}
          >
            {Object.values(TaskPriority).map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={onClose} color='error'>
          {t('AddTaskModal.buttons.cancel')}
        </Button>
        <Button onClick={handleSubmit} variant='contained'>
          {t('AddTaskModal.buttons.create')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTaskDialog;
