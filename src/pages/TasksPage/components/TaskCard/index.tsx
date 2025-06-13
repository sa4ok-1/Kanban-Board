import { useState, type MouseEvent } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Task } from 'types/task';
import type { TaskCardProps } from './type';
import { TaskInfoDialog, DeleteConfirmDialog } from '../../modals';
import { useTranslation } from 'react-i18next';

export default function TaskCard({
  task,
  viewMode,
  onEdit,
  onDelete,
}: TaskCardProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const { t } = useTranslation('task_card');

  const handleEditClick = (e: MouseEvent) => {
    e.stopPropagation();
    setEditMode(true);
    setOpenDialog(true);
  };

  const handleDeleteClick = (e: MouseEvent) => {
    e.stopPropagation();
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
          paddingRight: viewMode === 'list' ? '4rem' : '0.5rem',
          display: viewMode === 'list' ? 'flex' : 'block',
          alignItems: viewMode === 'list' ? 'center' : undefined,
          gap: viewMode === 'list' ? 2 : 0,
          paddingBottom: viewMode === 'grid' ? '3rem' : undefined,
        }}
        onClick={() => setOpenDialog(true)}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            paddingBottom: viewMode === 'list' ? '16px' : undefined,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <Typography variant='h6' fontWeight='bold'>
            {task.title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {t('fields.description')}: {task.description}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {t('fields.completed')}:{' '}
            {task.completed
              ? t('fields.completed_true')
              : t('fields.completed_false')}
          </Typography>
        </CardContent>

        {viewMode === 'list' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button
              variant='outlined'
              size='small'
              startIcon={<EditIcon />}
              onClick={handleEditClick}
            >
              {t('edit')}
            </Button>
            <Button
              variant='outlined'
              color='error'
              size='small'
              startIcon={<DeleteIcon />}
              onClick={handleDeleteClick}
            >
              {t('delete')}
            </Button>
          </Box>
        )}

        {viewMode === 'grid' && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              px: 2,
            }}
          >
            <Button
              variant='outlined'
              size='small'
              startIcon={<EditIcon />}
              onClick={handleEditClick}
            >
              {t('edit')}
            </Button>
            <Button
              variant='outlined'
              color='error'
              size='small'
              startIcon={<DeleteIcon />}
              onClick={handleDeleteClick}
            >
              {t('delete')}
            </Button>
          </Box>
        )}
      </Card>

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
