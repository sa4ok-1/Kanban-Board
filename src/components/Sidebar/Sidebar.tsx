import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Box,
  Button,
  Tooltip,
  IconButton,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { navConfig } from './config';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { drawerWidth } from './constants';

import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation('sidebar');

  return (
    <Drawer
      variant='permanent'
      open={open}
      sx={{
        width: open ? drawerWidth : 64,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        backgroundColor: 'background.paper',
        boxShadow: 3,
        borderRight: '1px solid',
        borderColor: 'divider',
        transition: (theme) =>
          theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : 64,
          overflowX: 'hidden',
          backgroundColor: 'background.paper',
          boxShadow: 3,
          borderRight: '1px solid',
          borderColor: 'divider',
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
      }}
    >
      <Box
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
          px: 2,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton
          onClick={() => setOpen((prev) => !prev)}
          sx={{ fontSize: '1.7rem' }}
        >
          {open ? (
            <MenuOpenIcon fontSize='inherit' />
          ) : (
            <MenuIcon fontSize='inherit' />
          )}
        </IconButton>
      </Box>

      <List sx={{ py: 2 }}>
        {navConfig.map(({ to, labelKey, icon: Icon }) => (
          <ListItem key={labelKey} disablePadding sx={{ px: 2 }}>
            <NavLink to={to} style={{ width: '100%', textDecoration: 'none' }}>
              <Tooltip title={!open ? t(labelKey) : ''} placement='right'>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2,
                    color: 'text.secondary',
                  }}
                >
                  <Icon
                    sx={{
                      color: 'primary.main',
                      minWidth: 0,
                      mr: open ? 2 : 'auto',
                      justifyContent: 'center',
                      fontSize: '2rem',
                    }}
                    fontSize='inherit'
                  />
                  {open && (
                    <ListItemText
                      primary={t(labelKey)}
                      slotProps={{
                        primary: {
                          sx: {
                            fontWeight: 'bold',
                            color: 'text.secondary',
                          },
                        },
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </NavLink>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 'auto', mb: 4, p: 2 }}>
        <Tooltip title={!open ? t('logout') : ''} placement='right'>
          <Button
            fullWidth={open}
            variant={open ? 'outlined' : 'text'}
            color='error'
            sx={{
              fontWeight: 'bold',
              justifyContent: 'flex-start',
              px: open ? 2 : 1,
              minWidth: 0,
              gap: 1,
            }}
          >
            <LogoutIcon
              sx={{ color: 'error.main', fontSize: '1.7rem' }}
              fontSize='inherit'
            />
            {open && (
              <Box component='span' sx={{ ml: 1 }}>
                {t('logout')}
              </Box>
            )}
          </Button>
        </Tooltip>
      </Box>
    </Drawer>
  );
}
