import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'routes/config';

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const { t } = useTranslation('user_menu');

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleClose();
    navigate(AppRoutes.PROFILE);
  };

  const handleLogout = () => {
    handleClose();
    navigate(AppRoutes.LOGIN);
  };

  return (
    <>
      <IconButton edge='end' aria-label='user profile' onClick={handleClick}>
        <Avatar
          sx={{
            width: 32,
            height: 32,
          }}
        >
          U
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            sx: {
              bgcolor: '#f5f5f5',
              '& .MuiMenuItem-root': {
                color: 'darkblue',
                '&:hover': {
                  bgcolor: 'lightblue',
                },
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleProfile}>{t('profile')}</MenuItem>
        <MenuItem onClick={handleLogout}>{t('log out')}</MenuItem>
      </Menu>
    </>
  );
}
