import { useState, type MouseEvent } from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import type { CreateTask } from 'types/task';
import type { TaskCardProps } from './type';
import TaskInfoDialog from '../../modals/TaskInfoDialog';
import DeleteConfirmDialog from '../../modals/DeleteTask';
import { STATUS_CONFIG } from '../../config/ConfigColor';
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
  const statusConfig = STATUS_CONFIG[task.status];
  const { t } = useTranslation('task_board_page');

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

  const handleSave = (updatedTask: CreateTask) => {
    onEdit(updatedTask);
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
          borderLeft: (theme) =>
            `4px solid ${theme.palette.status[statusConfig.colorKey]}`,
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
          <Typography variant='h6' fontWeight='bold'>
            {task.title}
          </Typography>
          <Typography
            variant='body2'
            sx={{ fontSize: '18px', color: 'text.secondary' }}
          >
            Description: {t(`status.${task.description}`)}
          </Typography>
          <Typography
            variant='body2'
            sx={{ fontSize: '18px', color: 'text.secondary' }}
          >
            Status: {t(`status.${task.status}`)}
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
