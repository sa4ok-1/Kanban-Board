import type { Theme } from '@mui/material/styles';

export const headerActionsStyles = {
  container: {
    p: { xs: 2, sm: 3 },
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerStack: (theme: Theme) => ({
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    fontSize: { xs: '1rem', sm: '1.25rem' },
    width: '100%',
    mb: { xs: 1, sm: 0 },
  }),
  select: {
    minWidth: { xs: '100%', sm: 120 },
    width: { xs: '100%', sm: 'auto' },
    mb: { xs: 1, sm: 0 },
  },
  sortSelect: {
    minWidth: { xs: '100%', sm: 150 },
    width: { xs: '100%', sm: 'auto' },
    mb: { xs: 1, sm: 0 },
  },
  toggleButtonGroup: (theme: Theme) => ({
    width: { xs: '100%', sm: 'auto' },
    mb: { xs: 1, sm: 0 },
    bgcolor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,0.05)'
        : 'rgba(0,0,0,0.04)',
    borderRadius: 2,
    '& .MuiToggleButton-root': {
      flex: 1,
      borderColor: theme.palette.divider,
      color:
        theme.palette.mode === 'dark'
          ? theme.palette.common.white
          : theme.palette.primary.main,
      '&.Mui-selected': {
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
  }),
  searchBox: {
    width: { xs: '100%', sm: 200 },
  },
  flexGrowStack: {
    flexGrow: 1,
    width: { xs: '100%', sm: 'auto' },
    flexWrap: 'wrap' as const,
    mb: { xs: 2, sm: 0 },
  },
};
