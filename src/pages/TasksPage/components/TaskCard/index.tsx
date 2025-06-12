import { useState, type MouseEvent } from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import type { Task } from 'types/task';
import type { TaskCardProps } from './type';
import TaskInfoDialog from '../../modals/TaskInfoDialog';
import DeleteConfirmDialog from '../../modals/DeleteTask';
import TaskMenu from './TaskCardMenu';
import { useTranslation } from 'react-i18next';

export default function TaskCard({
  task,
  viewMode,
  onEdit,
  onDelete,
}: TaskCardProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const { t } = useTranslation('task_card');

  const handleSettingsClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    setEditMode(true);
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    handleMenuClose();
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = () => {
    onDelete(task.id);
    setDeleteConfirmOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmOpen(false);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEditMode(false);
  };

  const handleSave = async (updatedTask: Task) => {
    await onEdit(updatedTask);
    handleDialogClose();
  };

  return (
    <>
      <Card
        sx={{
          textAlign: 'left',
          width: '100%',
          height: viewMode === 'list' ? 'auto' : '100%',
          minHeight: '150px',
          border: '1px solid black',
          cursor: 'pointer',
          position: 'relative',
          paddingTop: '0.5rem',
          paddingRight: '0.5rem',
        }}
        onClick={() => setOpenDialog(true)}
      >
        <IconButton
          aria-label='settings'
          onClick={handleSettingsClick}
          sx={{
            position: 'absolute',
            top: 4,
            right: 4,
            zIndex: 10,
          }}
        >
          <SettingsIcon />
        </IconButton>

        <CardContent>
          <Typography
            variant='h6'
            fontWeight='bold'
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {task.title}
          </Typography>
          <Typography
            variant='body2'
            sx={{
              fontSize: '18px',
              color: 'text.secondary',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {t('fields.description')}: {task.description}
          </Typography>
          <Typography
            variant='body2'
            sx={{
              fontSize: '18px',
              color: 'text.secondary',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {t('fields.completed')}:{' '}
            {task.completed
              ? t('fields.completed_true')
              : t('fields.completed_false')}
          </Typography>
        </CardContent>
      </Card>

      <TaskMenu
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />

      <TaskInfoDialog
        open={openDialog}
        onClose={handleDialogClose}
        task={task}
        editMode={editMode}
        onSave={handleSave}
      />

      <DeleteConfirmDialog
        open={deleteConfirmOpen}
        taskTitle={task.title}
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
}
