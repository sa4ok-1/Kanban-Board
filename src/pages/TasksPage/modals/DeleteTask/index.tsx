import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import type { DeleteDialogProps } from './type';

import { useTranslation } from 'react-i18next';

export default function DeleteConfirmDialog({
  open,
  taskTitle,
  onCancel,
  onConfirm,
}: DeleteDialogProps) {
  const { t } = useTranslation('delete_task');
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{t('Confirm Delete')}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {t('Are you sure you want to delete "{taskTitle}"?', { taskTitle })}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>{t('Cancel')}</Button>
        <Button onClick={onConfirm} color='error' autoFocus>
          {t('Delete')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
