import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";
import { nanoid } from "nanoid";
import type { TaskFormValues } from "../types/type";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TaskFormValues) => void;
}

const initialValues: TaskFormValues = {
  id: "",
  title: "",
  description: "",
  status: "To Do",
};

const AddTaskModal: React.FC<Props> = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = React.useState<TaskFormValues>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            name="title"
            label="Title"
            fullWidth
            multiline
            rows={3}
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="Description"
            fullWidth
            multiline
            rows={3}
            value={formData.description}
            onChange={handleChange}
          />

          <TextField
            name="status"
            label="Task Status"
            select
            fullWidth
            value={formData.status}
            onChange={handleChange}
          >
            {["To Do", "In Progress", "Done"].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskModal;
