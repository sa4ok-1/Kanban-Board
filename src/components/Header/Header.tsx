import Stack from '@mui/material/Stack';
import { ThemeSwitcher } from 'components/Header/components/ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from 'components/Header/components/LanguageSwitcher/LanguageSwitcher';
import { Notifications } from 'components/Header/components';
import { UserMenu } from 'components/Header/components';
import { AppTitle } from 'components/Header/components';
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
