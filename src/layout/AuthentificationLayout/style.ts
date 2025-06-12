import type { SxProps, Theme } from '@mui/material/styles';

export const authLayoutStyles: SxProps<Theme> = {
  minHeight: '100vh',
  width: '100%',
  background: (theme: Theme) =>
    `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: "left"
};


export const containerStyles: SxProps<Theme> = {
  maxWidth: 'sm',
};
