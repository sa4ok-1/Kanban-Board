import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, type MouseEvent } from "react";
import type { CreateTask } from "../../../types/type";
import TaskDialog from "../modals/TaskInfoDialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  task: CreateTask;
  viewMode: "list" | "grid";
  onEdit: (task: CreateTask) => void;
  onDelete: (taskId: string) => void;
}

export default function TaskCard({ task, viewMode, onEdit, onDelete }: Props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const statusColor =
    task.status === "In Progress"
      ? "#FFC107"
      : task.status === "Done"
        ? "#4CAF50"
        : "#2196F3";

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
    if (window.confirm(`Delete this task: ${task.title}?`)) {
      onDelete(task.id);
    }
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
          textAlign: "center",
          width: "100%",
          height: viewMode === "list" ? "auto" : "100%",
          minHeight: "150px",
          border: "1px solid black",
          borderLeft: `4px solid ${statusColor}`,
          cursor: "pointer",
          position: "relative",
          paddingTop: "0.5rem",
          paddingRight: "0.5rem",
        }}
        onClick={() => setOpenDialog(true)}
      >
        <IconButton
          aria-label="settings"
          onClick={handleSettingsClick}
          sx={{
            position: "absolute",
            top: 4,
            right: 4,
            zIndex: 10,
          }}
        >
          <SettingsIcon />
        </IconButton>

        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {task.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "18px", color: "text.secondary" }}
          >
            Description: {task.description}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "18px", color: "text.secondary" }}
          >
            Status: {task.status}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "18px", color: "text.secondary" }}
          >
            Priority: {task.priority}
          </Typography>
        </CardContent>
      </Card>

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        onClick={(e) => e.stopPropagation()}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            marginTop: "8px",
          },
        }}
      >
        <MenuItem onClick={handleEditClick}>
          <ListItemIcon>
            <EditIcon fontSize="small" color="info" /> 
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDeleteClick}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>

      <TaskDialog
        open={openDialog}
        onClose={handleDialogClose}
        task={task}
        editMode={editMode}
        onSave={handleSave}
      />
    </>
  );
}
