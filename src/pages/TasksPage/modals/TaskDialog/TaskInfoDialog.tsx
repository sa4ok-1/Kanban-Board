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
import { type CreateTask } from 'types/task';
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

export default function TaskInfoDialog({
  open,
  onClose,
  task,
  editMode = false,
  onSave,
}: TaskDialogProps) {
  const navigate = useNavigate();
  const { t } = useTranslation('task_info_dialog');
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

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
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='sm'
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          bgcolor: isDarkMode ? '#1a1b26' : '#ffffff',
          borderRadius: 3,
          border: isDarkMode
            ? '1px solid rgba(20, 184, 166, 0.3)'
            : '1px solid rgba(20, 184, 166, 0.2)',
          boxShadow: isDarkMode
            ? '0 0 20px rgba(20, 184, 166, 0.3)'
            : '0 4px 16px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out',
          px: { xs: 2, sm: 3 },
          py: 2,
          '&:hover': {
            boxShadow: isDarkMode
              ? '0 0 30px rgba(20, 184, 166, 0.5)'
              : '0 6px 24px rgba(0, 0, 0, 0.15)',
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.25rem', sm: '1.5rem' },
          color: isDarkMode ? '#e0e7ff' : '#1f2937',
          background: `linear-gradient(90deg, ${
            isDarkMode ? '#14b8a6' : '#2dd4bf'
          }, ${isDarkMode ? '#a855f7' : '#c084fc'})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          pb: 2,
          borderBottom: isDarkMode
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        {editMode ? t('task_dialog.edit_task') : t('task_dialog.task_details')}
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          bgcolor: 'transparent',
          color: isDarkMode ? '#d1d5db' : '#4b5563',
          py: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 3 },
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: isDarkMode ? '#14b8a6' : '#2dd4bf',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: isDarkMode
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(0, 0, 0, 0.05)',
          },
        }}
      >
        {editMode ? (
          <Box
            sx={{
              '& .MuiInputBase-root': {
                bgcolor: isDarkMode
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(0, 0, 0, 0.03)',
                borderRadius: 2,
                color: isDarkMode ? '#d1d5db' : '#4b5563',
                '& .MuiInputBase-input': {
                  color: isDarkMode ? '#d1d5db' : '#4b5563',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: isDarkMode
                    ? 'rgba(255, 255, 255, 0.3)'
                    : 'rgba(0, 0, 0, 0.2)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: isDarkMode ? '#14b8a6' : '#2dd4bf',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: isDarkMode ? '#a855f7' : '#c084fc',
                  borderWidth: 2,
                },
              },
            }}
          >
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
        <Button
          color='error'
          onClick={onClose}
          sx={{
            color: '#f87171',
            fontWeight: 500,
            textTransform: 'none',
            px: { xs: 2, sm: 3 },
            py: 1,
            borderRadius: 2,
            transition: 'all 0.2s ease',
            '&:hover': {
              bgcolor: isDarkMode
                ? 'rgba(248, 113, 113, 0.1)'
                : 'rgba(248, 113, 113, 0.05)',
              transform: 'scale(1.05)',
              boxShadow: isDarkMode
                ? '0 4px 12px rgba(0, 0, 0, 0.2)'
                : '0 4px 12px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          {editMode
            ? t('task_dialog.buttons.cancel')
            : t('task_dialog.buttons.close')}
        </Button>

        {editMode ? (
          <Button
            onClick={handleSaveClick}
            variant='contained'
            sx={{
              bgcolor: isDarkMode ? '#14b8a6' : '#2dd4bf',
              color: isDarkMode ? '#e0e7ff' : '#1f2937',
              fontWeight: 600,
              textTransform: 'none',
              px: { xs: 2, sm: 3 },
              py: 1,
              borderRadius: 2,
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: isDarkMode ? '#0d9488' : '#26a69a',
                transform: 'scale(1.05)',
                boxShadow: isDarkMode
                  ? '0 4px 12px rgba(0, 0, 0, 0.2)'
                  : '0 4px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            {t('task_dialog.buttons.save')}
          </Button>
        ) : (
          <Button
            onClick={handleCompleted}
            sx={{
              bgcolor: isDarkMode ? '#22c55e' : '#4ade80',
              color: isDarkMode ? '#e0e7ff' : '#1f2937',
              fontWeight: 600,
              textTransform: 'none',
              px: { xs: 2, sm: 3 },
              py: 1,
              borderRadius: 2,
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: isDarkMode ? '#16a34a' : '#22c55e',
                transform: 'scale(1.05)',
                boxShadow: isDarkMode
                  ? '0 4px 12px rgba(0, 0, 0, 0.2)'
                  : '0 4px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            {t('task_dialog.buttons.complete')}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
