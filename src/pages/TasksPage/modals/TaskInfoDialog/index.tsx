import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  useTheme,
  Box,
} from '@mui/material';
import { useState, useEffect, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Task } from 'types/task';
import { useTranslation } from 'react-i18next';
import TaskEditFields from '../TaskEditFields';
import TaskViewFields from '../TaskViewFields';
import type { TaskDialogProps } from './type';

export default function TaskInfoDialog({
  open,
  onClose,
  task,
  editMode = false,
  onSave,
}: TaskDialogProps) {
  const navigate = useNavigate();
  const { t } = useTranslation('task_dialog');
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [editedTask, setEditedTask] = useState<Task>(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    if (onSave) {
      onSave(editedTask);
    }
  };

  const handleCompleted = () => {
    navigate('/tasks');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogTitle>{editMode ? t('edit_task') : t('task_details')}</DialogTitle>

      <DialogContent dividers>
        {editMode ? (
          <Box>
            <TaskEditFields task={editedTask} onChange={handleChange} />
          </Box>
        ) : (
          <Box
            sx={{
              color: isDarkMode ? '#d1d5db' : '#4b5563',
              '& .MuiTypography-root': {
                color: isDarkMode ? '#d1d5db' : '#4b5563',
              },
            }}
          >
            <TaskViewFields task={task} />
          </Box>
        )}
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: 'space-between',
          px: { xs: 2, sm: 3 },
          py: 2,
          bgcolor: 'transparent',
        }}
      >
        <Button color='error' onClick={onClose}>
          {editMode ? t('buttons.cancel') : t('buttons.close')}
        </Button>

        {editMode ? (
          <Button onClick={handleSaveClick} variant='contained'>
            {t('buttons.save')}
          </Button>
        ) : (
          <Button onClick={handleCompleted}>{t('buttons.complete')}</Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
