import { useState, type ChangeEvent } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from '@mui/material';

import { type CreateTaskDialogProps, initialValues } from './type';

export default function CreateTaskDialog({
  open,
  onClose,
  onSubmit,
}: CreateTaskDialogProps) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.title.trim() || !formData.description.trim()) return;
    onSubmit(formData);
    setFormData(initialValues);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
      <DialogTitle>Create Task</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            name='title'
            label='Title'
            fullWidth
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            name='description'
            label='Description'
            fullWidth
            value={formData.description}
            onChange={handleChange}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='error'>
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant='contained'>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
