import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { useState, useEffect, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { type CreateTask } from '../../../types/type';
import { useTranslation } from 'react-i18next';
import TaskEditFields from './TaskEditFields';
import TaskViewFields from './TaskViewFields';

interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  task: CreateTask;
  editMode?: boolean;
  onSave?: (updatedTask: CreateTask) => void;
}

export default function TaskDialog({
  open,
  onClose,
  task,
  editMode = false,
  onSave,
}: TaskDialogProps) {
  const navigate = useNavigate();
  const { t } = useTranslation('task_info_dialog');

  const [editedTask, setEditedTask] = useState<CreateTask>(task);

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
      <DialogTitle>
        {editMode ? t('task_dialog.edit_task') : t('task_dialog.task_details')}
      </DialogTitle>

      <DialogContent dividers>
        {editMode ? (
          <TaskEditFields task={editedTask} onChange={handleChange} />
        ) : (
          <TaskViewFields task={task} />
        )}
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'space-between' }}>
        <Button color='error' onClick={onClose}>
          {editMode
            ? t('task_dialog.buttons.cancel')
            : t('task_dialog.buttons.close')}
        </Button>
        {editMode ? (
          <Button onClick={handleSaveClick} variant='contained' color='primary'>
            {t('task_dialog.buttons.save')}
          </Button>
        ) : (
          <Button onClick={handleCompleted} color='custom'>
            {t('task_dialog.buttons.complete')}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
