import Stack from '@mui/material/Stack';
import {
  ThemeSwitcher,
  AppTitle,
  UserMenu,
  Notifications,
  LanguageSwitcher,
} from 'components/Header/components';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
