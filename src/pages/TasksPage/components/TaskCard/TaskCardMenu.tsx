import { Menu, MenuItem, ListItemIcon, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { type MouseEvent } from 'react';
import type { TaskMenuProps } from './type';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('tooltip');

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
      <Tooltip title={t('edit_tooltip')} arrow>
        <MenuItem onClick={onEditClick}>
          <ListItemIcon>
            <EditIcon fontSize='small' color='custom' />
          </ListItemIcon>
        </MenuItem>
      </Tooltip>
      <Tooltip title={t('delete_tooltip')} arrow>
        <MenuItem onClick={onDeleteClick}>
          <ListItemIcon>
            <DeleteIcon fontSize='small' color='error' />
          </ListItemIcon>
        </MenuItem>
      </Tooltip>
    </Menu>
  );
}
