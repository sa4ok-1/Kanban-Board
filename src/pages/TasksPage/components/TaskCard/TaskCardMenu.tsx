import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { MouseEvent } from 'react';

interface TaskMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

export default function TaskMenu({
  anchorEl,
  onClose,
  onEditClick,
  onDeleteClick,
}: TaskMenuProps) {
  const open = Boolean(anchorEl);

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      onClick={handleClick}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{
        '& .MuiPaper-root': {
          marginTop: '8px',
        },
      }}
    >
      <MenuItem onClick={onEditClick}>
        <ListItemIcon>
          <EditIcon fontSize='small' color='info' />
        </ListItemIcon>
        <ListItemText>Edit</ListItemText>
      </MenuItem>
      <MenuItem onClick={onDeleteClick}>
        <ListItemIcon>
          <DeleteIcon fontSize='small' color='error' />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </MenuItem>
    </Menu>
  );
}
