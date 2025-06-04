import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, type MouseEvent } from "react";
import type { CreateTask } from "../../types/type";
import TaskDialog from "./modals/TaskInfoDialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { STATUS_CONFIG } from "./stutusConfigColor";

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
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const menuOpen = Boolean(anchorEl);
  const statusConfig = STATUS_CONFIG[task.status];

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
          textAlign: "center",
          width: "100%",
          height: viewMode === "list" ? "auto" : "100%",
          minHeight: "150px",
          border: "1px solid black",
          borderLeft: (theme) =>
            `4px solid ${theme.palette.status[statusConfig.colorKey]}`,
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

      <Dialog
        open={deleteConfirmOpen}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete "{task.title}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
