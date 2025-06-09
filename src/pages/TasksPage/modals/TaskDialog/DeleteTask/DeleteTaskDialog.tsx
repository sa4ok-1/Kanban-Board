import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import type { DeleteDialogProps } from './type';

export default function DeleteConfirmDialog({
  open,
  taskTitle,
  onCancel,
  onConfirm,
}: DeleteDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Are you sure you want to delete &quot;{taskTitle}&quot;?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onConfirm} color='error' autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
