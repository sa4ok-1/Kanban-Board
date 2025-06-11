import type { Theme } from '@mui/material/styles';
import { DRAWER_WIDTH_OPEN, DRAWER_WIDTH_CLOSED } from './constants';

const commonTransition = (open: boolean, theme: Theme) =>
  theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration:
      theme.transitions.duration[open ? 'enteringScreen' : 'leavingScreen'],
  });

const commonPaperStyles = (open: boolean, theme: Theme) => ({
  width: open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED,
  borderRight: 'none',
  boxShadow: theme.shadows[3],
  overflowX: 'hidden',
  transition: commonTransition(open, theme),
});

export const sxStyles = {
  drawer: (open: boolean, theme: Theme) => ({
    width: open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    transition: commonTransition(open, theme),
    '& .MuiDrawer-paper': commonPaperStyles(open, theme),
  }),

  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },

  toggleBtnBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    p: 2,
    mb: 1,
  },

  navList: {
    px: 1,
  },

  logoutBox: (theme: Theme) => ({
    p: 2,
    borderTop: `1px solid ${theme.palette.divider}`,
  }),

  navItem: (active: boolean, theme: Theme) => ({
    borderRadius: 1,
    mb: 0.5,
    bgcolor: active ? `${theme.palette.primary.main}1A` : 'transparent',
    '&:hover': {
      bgcolor: `${theme.palette.primary.main}1A`,
    },
    '& .MuiListItemIcon-root': {
      color: active ? theme.palette.primary.main : theme.palette.text.secondary,
      minWidth: 36,
    },
    '& .MuiListItemText-root': {
      opacity: 1,
      transition: theme.transitions.create('opacity'),
      '& span': {
        fontWeight: active ? 600 : 500,
        color: active
          ? theme.palette.primary.main
          : theme.palette.text.secondary,
      },
    },
  }),

  toggleButton: (theme: Theme) => ({
    color: theme.palette.text.secondary,
    '&:hover': {
      bgcolor: 'action.hover',
    },
  }),

  logoutButton: (theme: Theme) => ({
    justifyContent: 'flex-start',
    p: '8px 16px',
    borderRadius: 1,
    '&:hover': {
      bgcolor: `${theme.palette.error.main}1A`,
    },
    '& .MuiListItemIcon-root': {
      color: theme.palette.error.main,
      minWidth: 36,
    },
    '& .MuiListItemText-root': {
      opacity: 1,
      transition: theme.transitions.create('opacity'),
      '& span': {
        color: theme.palette.error.main,
        fontWeight: 600,
      },
    },
  }),
};
