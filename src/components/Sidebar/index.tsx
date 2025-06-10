import { Drawer, Box, List } from '@mui/material';
import { useState } from 'react';
import { navConfig } from './config';
import { sxStyles } from './styles';
import {
  SidebarToggleButton,
  SidebarLogoutButton,
  NavItem,
} from './components';

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <Drawer variant='permanent' open={open} sx={sxStyles.drawer(open)}>
      <Box sx={sxStyles.toggleBtnBox}>
        <SidebarToggleButton open={open} toggle={toggleOpen} />
      </Box>

      <List sx={sxStyles.navList}>
        {navConfig.map(({ to, labelKey, icon }) => (
          <NavItem
            key={labelKey}
            to={to}
            labelKey={labelKey}
            icon={icon}
            open={open}
          />
        ))}
      </List>

      <Box sx={sxStyles.logoutBox}>
        <SidebarLogoutButton open={open} />
      </Box>
    </Drawer>
  );
}
