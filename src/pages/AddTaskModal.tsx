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
import type { TaskFormValues } from "../types/types";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TaskFormValues) => void;
}

const initialValues: TaskFormValues = {
  description: "",
  type: "Bug",
  status: "To Do",
  priority: "Medium",
  date: "",
  owner: "",
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
    onSubmit(formData);
    setFormData(initialValues);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
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
            name="type"
            label="Task Type"
            select
            fullWidth
            value={formData.type}
            onChange={handleChange}
          >
            {["Bug", "Feature", "Improvement"].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
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
          <TextField
            name="priority"
            label="Priority"
            select
            fullWidth
            value={formData.priority}
            onChange={handleChange}
          >
            {["Low", "Medium", "High"].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="date"
            label="Task Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.date}
            onChange={handleChange}
          />
          <TextField
            name="owner"
            label="Task Owner"
            fullWidth
            value={formData.owner}
            onChange={handleChange}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskModal;
