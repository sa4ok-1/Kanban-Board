import Stack from '@mui/material/Stack';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  ThemeSwitcher,
  AppTitle,
  UserMenu,
  Notifications,
  LanguageSwitcher,
} from 'components/Header/components';
import type { HeaderProps } from './type';

export default function Header({ onMenuClick }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {isMobile && (
          <IconButton onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        )}
        <AppTitle />
      </Box>
      <Stack direction='row' alignItems='center' spacing={1}>
        <LanguageSwitcher />
        <Notifications />
        <UserMenu />
        <ThemeSwitcher />
      </Stack>
    </>
  );
}
