import Stack from '@mui/material/Stack';
import { ThemeSwitcher } from 'components/Header/components/ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from 'components/Header/components/LanguageSwitcher/LanguageSwitcher';
import { Notifications } from 'components/Notification';
import User from 'components/UserMenu/User';

export default function Header() {
  return (
    <Stack direction='row' alignItems='center' spacing={1}>
      <LanguageSwitcher />
      <Notifications />
      <User />
      <ThemeSwitcher />
    </Stack>
  );
}
