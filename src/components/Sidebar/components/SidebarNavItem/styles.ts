export const navItemStyles = (open: boolean) => ({
  justifyContent: open ? 'initial' : 'center',
  px: 2,
  color: 'text.secondary',
});

export const iconStyles = (open: boolean) => ({
  color: 'primary.main',
  minWidth: 0,
  mr: open ? 2 : 'auto',
  justifyContent: 'center',
  fontSize: '2rem',
});
