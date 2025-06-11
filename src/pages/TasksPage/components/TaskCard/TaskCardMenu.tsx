import { Menu, MenuItem, ListItemIcon } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { MouseEvent } from 'react';
import type { TaskMenuProps } from './type';

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
          <EditIcon fontSize='small' color='custom' />
        </ListItemIcon>
      </MenuItem>
      <MenuItem onClick={onDeleteClick}>
        <ListItemIcon>
          <DeleteIcon fontSize='small' color='error' />
        </ListItemIcon>
      </MenuItem>
    </Menu>
  );
}
