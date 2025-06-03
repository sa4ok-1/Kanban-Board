import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { CreateTask } from "../../../types/type";

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

  // Локальний стейт для редагування
  const [editedTask, setEditedTask] = useState<CreateTask>(task);

  // Коли відкриваємо діалог або приходить новий task - оновлюємо локальний стейт
  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    navigate("/tasks");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{editMode ? "Edit Task" : "Task Details"}</DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection="column" gap={2}>
          {editMode ? (
            <>
              <TextField
                label="Title"
                name="title"
                value={editedTask.title}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Description"
                name="description"
                value={editedTask.description}
                onChange={handleChange}
                fullWidth
                multiline
                rows={3}
              />
              <TextField
                select
                label="Status"
                name="status"
                value={editedTask.status}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </TextField>
              <TextField
                select
                label="Priority"
                name="priority"
                value={editedTask.priority}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </TextField>
              <TextField
                label="Author"
                name="author"
                value={editedTask.author || ""}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Executor"
                name="executor"
                value={editedTask.executor || ""}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                select
                label="Privacy"
                name="privacy"
                value={editedTask.privacy}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
              </TextField>
            </>
          ) : (
            <>
              <Typography>
                <strong>Title:</strong> {task.title}
              </Typography>
              <Typography>
                <strong>Description:</strong> {task.description}
              </Typography>
              <Typography>
                <strong>Status:</strong> {task.status}
              </Typography>
              <Typography>
                <strong>Priority:</strong> {task.priority}
              </Typography>
              <Typography>
                <strong>Author:</strong> {task.author || "Unknown"}
              </Typography>
              <Typography>
                <strong>Executor:</strong> {task.executor || "Unassigned"}
              </Typography>
              <Typography>
                <strong>Privacy:</strong> {task.privacy}
              </Typography>
            </>
          )}
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between" }}>
        <Button color="error" onClick={onClose}>
          {editMode ? "Cancel" : "Close"}
        </Button>
        {editMode ? (
          <Button onClick={handleSaveClick} variant="contained" color="primary">
            Save
          </Button>
        ) : (
          <Button onClick={handleCompleted} color="custom">
            Complete
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
