import { Drawer, Box, List } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { navConfig } from './config';
import { sxStyles } from './styles';
import type { SidebarProps } from './type';
import {
  SidebarToggleButton,
  SidebarLogoutButton,
  NavItem,
} from './components';

export default function Sidebar({
  mobileOpen,
  handleDrawerToggle,
}: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(true);

  const handleDesktopToggle = () => setOpen((prev) => !prev);
  const currentOpen = isMobile ? true : open;

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? mobileOpen : open}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={sxStyles.drawer(currentOpen, theme)}
    >
      <Box sx={sxStyles.contentBox}>
        <Box>
          <Box sx={sxStyles.toggleBtnBox}>
            <SidebarToggleButton
              open={currentOpen}
              toggle={isMobile ? handleDrawerToggle : handleDesktopToggle}
            />
          </Box>

          <List sx={sxStyles.navList}>
            {navConfig.map(({ to, labelKey, icon }) => (
              <NavItem
                key={labelKey}
                to={to}
                labelKey={labelKey}
                icon={icon}
                open={currentOpen}
              />
            ))}
          </List>
        </Box>

        <Box sx={sxStyles.logoutBox(theme)}>
          <SidebarLogoutButton open={currentOpen} />
        </Box>
      </Box>
    </Drawer>
  );
}
