import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { CreateTask } from "../../../types/type";

interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  task: CreateTask;
}

export default function TaskDialog({ open, onClose, task }: TaskDialogProps) {
  const navigate = useNavigate();

  const handleCompleted = () => {
    navigate("/tasks");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Task Details</DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography><strong>Title:</strong> {task.title}</Typography>
          <Typography><strong>Description:</strong> {task.description}</Typography>
          <Typography><strong>Status:</strong> {task.status}</Typography>
          <Typography><strong>Priority:</strong> {task.priority}</Typography>
          <Typography><strong>Author:</strong> {task.author || "Unknown"}</Typography>
          <Typography><strong>Executor:</strong> {task.executor || "Unassigned"}</Typography>
          <Typography><strong>Privacy:</strong> {task.privacy}</Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between" }}>
        <Button color="error" onClick={onClose}>Close</Button>
        <Button onClick={handleCompleted} color="custom">Complete</Button>
      </DialogActions>
    </Dialog>
  );
}
