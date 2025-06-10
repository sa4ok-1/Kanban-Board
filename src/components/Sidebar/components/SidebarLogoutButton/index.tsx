import { Box, Button, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTranslation } from 'react-i18next';
import type { LogoutProps } from './type';

export default function SidebarLogoutButton({ open }: LogoutProps) {
  const { t } = useTranslation('sidebar');

  return (
    <Tooltip title={!open ? t('logout') : ''} placement='right'>
      <Button
        fullWidth={open}
        variant={open ? 'outlined' : 'text'}
        color='error'
        sx={{
          fontWeight: 'bold',
          justifyContent: 'flex-start',
          px: open ? 2 : 1,
          minWidth: 0,
          gap: 1,
        }}
      >
        <LogoutIcon
          sx={{ color: 'error.main', fontSize: '1.7rem' }}
          fontSize='inherit'
        />
        {open && (
          <Box component='span' sx={{ ml: 1 }}>
            {t('logout')}
          </Box>
        )}
      </Button>
    </Tooltip>
  );
}
