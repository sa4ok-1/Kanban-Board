import Stack from '@mui/material/Stack';
import {
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

import {
  ThemeSwitcher,
  AppTitle,
  UserMenu,
  Notifications,
  LanguageSwitcher,
} from 'components/Header/components';
import type { HeaderProps } from './type';

export default function Header({ onMenuClick }: HeaderProps) {
  const { t } = useTranslation('tooltip');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {isMobile && (
          <Tooltip title={t('menu')}>
            <IconButton onClick={onMenuClick} aria-label={t('menu')}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        )}
        <AppTitle />
      </Box>
      <Stack direction='row' alignItems='center' spacing={1}>
        <Tooltip title={t('language')}>
          <Box>
            <LanguageSwitcher />
          </Box>
        </Tooltip>
        <Tooltip title={t('notifications')}>
          <Box>
            <Notifications />
          </Box>
        </Tooltip>
        <Tooltip title={t('user')}>
          <Box>
            <UserMenu />
          </Box>
        </Tooltip>
        <Tooltip title={t('theme')}>
          <Box>
            <ThemeSwitcher />
          </Box>
        </Tooltip>
      </Stack>
    </>
  );
}
