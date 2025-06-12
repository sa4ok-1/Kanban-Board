import { ListItem, ListItemButton, ListItemText, Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { NavItemProps } from './type';
import { navItemStyles, iconStyles } from './styles';

export default function NavItem({
  to,
  labelKey,
  icon: Icon,
  open,
}: NavItemProps) {
  const { t } = useTranslation('sidebar');

  const translatedLabel = t(labelKey, { defaultValue: labelKey });

  return (
    <ListItem disablePadding sx={{ px: 2 }}>
      <NavLink to={to} style={{ width: '100%', textDecoration: 'none' }}>
        <Tooltip title={!open ? translatedLabel : ''} placement='right'>
          <ListItemButton sx={navItemStyles(open)}>
            <Icon sx={iconStyles(open)} />
            {open && (
              <ListItemText
                primary={translatedLabel}
                sx={{ fontWeight: 'bold', color: 'text.secondary' }}
              />
            )}
          </ListItemButton>
        </Tooltip>
      </NavLink>
    </ListItem>
  );
}
