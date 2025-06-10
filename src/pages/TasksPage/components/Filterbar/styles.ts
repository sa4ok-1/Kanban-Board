import type { SxProps, Theme } from '@mui/material';

export const filterBarStyles: SxProps<Theme> = {
  py: { xs: 2, sm: 2 },
  px: { xs: 3, sm: 4 },
  mt: { xs: 2, sm: 3 },
  backdropFilter: 'blur(10px)',
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: 3,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.15)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
  },
};

export const titleStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  fontWeight: 700,
  fontSize: { xs: '1rem', sm: '1.25rem' },
  letterSpacing: '-0.01em',
  background: 'linear-gradient(90deg, #8b5cf6, #14b8a6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export const selectStyles: SxProps<Theme> = {
  minWidth: { xs: '100%', sm: 120 },
  bgcolor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: 2,
  color: '#d1d5db',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#8b5cf6',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#7c3aed',
    borderWidth: 2,
  },
  '& .MuiSelect-icon': {
    color: '#d1d5db',
  },
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    bgcolor: 'rgba(255, 255, 255, 0.1)',
  },
};

export const sortSelectStyles: SxProps<Theme> = {
  ...selectStyles,
  minWidth: { xs: '100%', sm: 200 },
};

export const toggleButtonGroupStyles: SxProps<Theme> = {
  bgcolor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: 2,
  '& .MuiToggleButton-root': {
    borderColor: 'rgba(255, 255, 255, 0.3)',
    color: '#8b5cf6',
    transition: 'all 0.2s ease',
    '&:hover': {
      bgcolor: 'rgba(139, 92, 246, 0.2)',
      transform: 'scale(1.05)',
    },
    '&.Mui-selected': {
      bgcolor: '#8b5cf6',
      color: 'white',
      '&:hover': {
        bgcolor: '#7c3aed',
        transform: 'scale(1.05)',
      },
    },
  },
};

export const searchBoxStyles: SxProps<Theme> = {
  minWidth: { xs: '100%', sm: 250 },
  '& .MuiInputBase-root': {
    bgcolor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 2,
    color: '#d1d5db',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    transition: 'all 0.2s ease',
    '&:hover': {
      bgcolor: 'rgba(255, 255, 255, 0.1)',
      transform: 'scale(1.02)',
    },
    '&.Mui-focused': {
      bgcolor: 'rgba(255, 255, 255, 0.1)',
      borderColor: '#7c3aed',
    },
    '& .MuiInputBase-input': {
      color: '#d1d5db',
    },
  },
};
