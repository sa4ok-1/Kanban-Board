import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export const Notifications = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton 
        color="inherit" 
        aria-label="notifications"
        onClick={handleClick}
      >
        <Badge badgeContent={1} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'notifications-button',
        }}
        PaperProps={{
          style: {
            width: '300px',
            maxHeight: '400px',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography textAlign="center" width="100%">
            Notification area
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};