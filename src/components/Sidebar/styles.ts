export const sxStyles = {
  drawer: (open: boolean) => ({
    width: open ? 240 : 64,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: 'background.paper',
    boxShadow: 3,
    borderRight: '1px solid',
    borderColor: 'divider',
    transition: (theme: any) =>
      theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    '& .MuiDrawer-paper': {
      width: open ? 240 : 64,
      overflowX: 'hidden',
      backgroundColor: 'background.paper',
      boxShadow: 3,
      borderRight: '1px solid',
      borderColor: 'divider',
      transition: (theme: any) =>
        theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
  }),
  toggleBtnBox: {
    paddingTop: 2,
    paddingBottom: 2,
    px: 2,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navList: {
    py: 2,
  },
  logoutBox: {
    mt: 'auto',
    mb: 4,
    p: 2,
  },
};
